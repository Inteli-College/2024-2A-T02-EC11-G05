import numpy as np
import cv2
from ultralytics import YOLO

# Função que converte área de pixels para metros quadrados
def pixel_to_meters_squared(area_pixels, pixel_size_meters):
    """
    Converte a área de pixels para metros quadrados.

    :param area_pixels: Área em pixels (número total de pixels segmentados)
    :param pixel_size_meters: Tamanho de um pixel em metros (exemplo: 0.01 para 1 cm)
    :return: Área em metros quadrados
    """
    area_m2 = area_pixels * (pixel_size_meters ** 2)
    return area_m2

# Carregar o modelo
model = YOLO('/content/best.pt')

# Carregar a imagem
image = cv2.imread('/content/imaa.jpeg')

# Fazer a predição
results = model(image)

# Obter os nomes das classes
class_names = model.names

# Criar uma máscara com o mesmo tamanho da imagem
masks_image = np.zeros_like(image)

# Inicializar a variável que vai somar todos os pixels identificados
total_pixels = 0

# Loop pelos resultados
for result in results:
    if hasattr(result, 'masks') and result.masks is not None:
        masks = result.masks.data
        classes = result.boxes.cls

        for mask, cls in zip(masks, classes):
            mask = mask.cpu().numpy()

            # Criar uma máscara binária
            binary_mask = (mask > 0.5).astype(np.uint8)
            area_pixels = np.sum(binary_mask)  # Calcular a área da máscara em pixels

            # Somar à variável total
            total_pixels += area_pixels

            # Redimensionar a máscara binária para combinar com o tamanho da imagem original
            binary_mask_resized = cv2.resize(binary_mask, (image.shape[1], image.shape[0]), interpolation=cv2.INTER_NEAREST)

            # Criar uma máscara colorida
            colored_mask = np.zeros_like(image)
            color = np.random.randint(0, 255, (1, 3)).tolist()[0]
            colored_mask[binary_mask_resized == 1] = color

            # Combinar a máscara colorida com a imagem de máscaras
            masks_image = cv2.addWeighted(masks_image, 1, colored_mask, 0.5, 0)

            # Obter o nome da classe
            class_name = class_names[int(cls)]
            print(f'A área do objeto segmentado ({class_name}) é: {area_pixels} pixels')
    else:
        print("Nenhuma máscara encontrada nos resultados.")

# Definir o tamanho do pixel em metros (exemplo: 0.01 para 1 cm por pixel)
pixel_size_meters = 0.01

# Converter a área total para metros quadrados
total_area_m2 = pixel_to_meters_squared(total_pixels, pixel_size_meters)
print(f'A área total segmentada é: {total_pixels} pixels, ou {total_area_m2:.4f} metros quadrados')
