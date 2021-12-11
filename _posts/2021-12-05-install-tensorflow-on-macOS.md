---
title:  "Install TensorFlow on macOS (M1)"
date:   2021-12-05 00:00:01
toc: true
toc_sticky: true
tags: [tools,tensorflow,conda]
---

In this post, the conda-like package installed called Miniforge is installed on a mac machine (M1). Then TensorFlow for mac is installed on the virtual environment created by conda.

## Prerequisites

Before installing TensorFlow, it is required to install some preliminary tools.

### XCode Command Line Tools

These are software and tools needed for programming on a Mac machine, they are not included in a new computer by default, so it is required to install them manually. To do that, run the following command in the terminal.

```bash
xcode-select --install
```

A window asking for confirmation will pop up, click "Install" and wait until the process completes.

Run the following command and if it gives the install directory `/Library/Developer/CommandLineTools`, the installation is successful.

```bash
xcode-select -p
```

### Conda (Miniforge)

Like Python virtual environment, Conda can help the user manage packages as well as provide isolated working environment, which is important when working on multiple projects simultaneously. On M1 Mac machines, a minimalistic Conda installer called Miniforge can be used.

#### Installation

Download the install script from the [Miniforge Github page](https://github.com/conda-forge/miniforge#download) and run it in the terminal. Miniforge, by default, is installed to the `miniforge` under the home directory, it can be changed during the installation process, pay attention to the questions asked during the process.

```bash
bash Miniforge3-MacOSX-arm64.sh
```

![Answering yes to allow conda init](/assets/images/20211205/conda_init.png)



At the end of the installation, initialize the Miniforge by answering yes to the question. The initialization can also be done manually by running the following command.

```bash
# If the initialization is done by the script
# Then this step is NOT REQUIRED
# MINIFORGE_DIR here is the install path
# like /Users/username/miniforge3
MINIFORGE_DIR/bin/conda init zsh
```


#### Usage

After initialization, start a new terminal and there should be a `(base)` in front of the command line, which indicates the current conda environment. To create a new environment, use the following command.

```bash
# Create a env with system Python version
conda create --name ENV_NAME

# Create a env with specified Python version
# and pre-installed packages
conda create --name ENV_NAME python=3.8 numpy pandas
```

Then one can "log in" to the new environment by using the `activate` command, similarly, "logging out" is achieved by the `deactivate` command. Note that if the base environment is deactivated, the system Python will be used.

To remove a environment, type the command below.

```bash
# Remove a env
conda remove --name=ENV_NAME --all
```

To list all existing environments, use the following command.

```bash
# List envs
conda info --envs
# OR
conda env list
```

More information about managing environments using `conda` can be found on the [Conda website](https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html).

## Installing TensorFlow

First, create a new conda environment and install dependencies.

```bash
conda create --name tensorflow-mac python=3.9
conda activate tensorflow-mac
conda install -c apple tensorflow-deps
```

Then install TensorFlow and TensorFlow-metal plugin for accelerated training.

```bash
pip install tensorflow-macos
pip install tensorflow-metal
```

To test whether the installation is successful, import TensorFlow in python and check the version.

```python
import tensorflow
tf.__version__
tf.config.list_physical_devices()
```



![TensorFlow version](/assets/images/20211205/tf_version.png)



## Benchmarking using MNIST


Run the following TensorFlow test code to verify the usability of the environment.

```python
import tensorflow as tf

mnist = tf.keras.datasets.mnist
(x_train, y_train), (x_test, y_test) = mnist.load_data()
x_train, x_test = x_train / 255.0, x_test / 255.0
model = tf.keras.models.Sequential([
    tf.keras.layers.Flatten(input_shape=(28, 28)),
    tf.keras.layers.Dense(128, activation='relu'),
    tf.keras.layers.Dense(10)
])
loss_fn = tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True)
model.compile(optimizer='adam', loss=loss_fn, metrics=['accuracy'])
model.fit(x_train, y_train,epochs=10, batch_size=128)
```

The training runs on GPU, indicating a successful installation of TensorFlow.


![GPU benchmark](/assets/images/20211205/gpu_benchmark.png)



## More Information

- <https://realpython.com/effective-python-environment/>
- <https://docs.conda.io/projects/conda/en/latest/user-guide/index.html>
- <https://developer.apple.com/metal/tensorflow-plugin/>

  
