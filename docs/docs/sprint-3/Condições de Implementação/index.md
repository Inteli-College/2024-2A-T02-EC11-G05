---
title: Condições de Implementação
sidebar_position: 2
---

## Condições de Implementação

A implementação da solução desenvolvida no projeto tem como objetivo automatizar e padronizar a contagem de árvores em grandes áreas florestais a partir de imagens de satélites e drones. Como esse processo, que tradicionalmente é realizado de forma manual e com alto custo de tempo e recursos, se torna mais eficiente com o uso de tecnologias de visão computacional, como o modelo YOLOv8 - Instance Segmentation, utilizado em nosso projeto.

A solução foi desenvolvida para ser executada a princípio localmente, utilizando um servidor configurado em um Raspberry Pi 5. A escolha dessa plataforma permite que o sistema seja acessível e utilizado em áreas remotas, onde a infraestrutura de rede pode ser limitada. Além do mais, o Raspberry Pi serve como o ponto de processamento das imagens, recebendo os dados capturados por drones ou satélites, e realizando o processamento necessário para contar as árvores e calcular o potencial de sequestro de carbono na área analisada.

Vale ressaltar que o sistema é acessado via um frontend, uma interface de Dashboard, que pode ser iniciado localmente. Para isso, o usuário deve primeiro clonar o repositório do projeto, que contém todo o código necessário. :

```python
git clone https://github.com/Inteli-College/2024-2A-T02-EC11-G05.git
```

Uma vez no diretório do frontend, acesso o caminho para visualização:

```python
cd \2024-2A-T02-EC11-G05\src\frontend\carbon-check\
```

Desse modo, usando o comando ```npm start``` permitirá iniciar a interface gráfica que fornece acesso ao dashboard da solução localmente (http://localhost:3000/). Esse dashboard foi desenvolvido para ser intuitivo e acessível, oferecendo funcionalidades como o upload de imagens para análise, visualização de gráficos com a contagem de árvores e opções para realizar comparações entre diferentes áreas florestais. Vale lembrar que para versão atual ainda não está com modelo integrado para receber e visualizar os logs dos processamentos de imagem.

Além do frontend, o backend do sistema para essa versão ainda está em desenvolvimento. No entanto, aliás, o processamento das imagens e a execução do modelo será passado pelo backend e só assim exibido os logs no dashboard. Isso garantirá que o ambiente de execução seja padronizado e possa ser facilmente configurado. Já o modelo YOLOv8, responsável pela segmentação das árvores nas imagens, está armazenado no diretório específico do projeto em ```src/modelos/yolo_model/model_v1```, no arquivo ```model_v1```.

```python
cd \2024-2A-T02-EC11-G05\src\modelos\yolo_model\model_script> python segmente_calc.py
```


Desse modo, para execução, é carregado com o script ```python3 segmente_calc.py``` (para Linux), que executa todo o processo de contagem de árvores de forma automatizada.

Ao final do processamento, o sistema gera relatório que mostram a quantidade de árvores identificadas, a área de confibilidade de intervalos por essas árvores e uma estimativa do potencial de sequestro de carbono no dashboard. Esses dados são essenciais para o monitoramento ambiental e podem ser utilizados por gestores florestais, ONGs, empresas de créditos de carbono e pesquisadores para embasar decisões e planejar ações de conservação ambiental.

Essa solução não só automatiza a contagem de árvores, mas também oferece uma ferramenta robusta e acessível para monitoramento florestal. O sistema contribui diretamente para projetos de reflorestamento, combate às mudanças climáticas e preservação de ecossistemas, além de promover a inovação tecnológica no campo ambiental.

Para melhor experiencia da interface dashboard, está disponivel o link do figma:

[![Figma-interface](/docs/static/img/interface.png)](https://www.figma.com/proto/dgvsIn8QOuWolBKhzyxx7p/Carbon-Check?page-id=0%3A1&node-id=148-439&node-type=frame&viewport=921%2C-684%2C0.5&t=XLGXET4hRIfX9pf9-1&scaling=contain&content-scaling=fixed)
