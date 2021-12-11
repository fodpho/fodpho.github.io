---
title:  "brew command on macOS"
date:   2021-12-04 00:00:01
toc: true
toc_sticky: true
tags: [tools,brew]
---
This post is about installing and using `homebrew` on macOS.

## Install

[Homebrew](https://brew.sh) is a package manager for macOS and Linux (similar to `apt` for Ubuntu and Debian). It can be used to install packages that are not provided by Apple or Linux. Many programming tools like Python, gcc, and android-platform-tools can be installed using this command. To install `brew` on macOS, open a terminal and run the command below.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

The command fetches the installation script of homebrew from the Internet using `curl`  and runs it locally to install the package.

After installing, homebrew can be added to PATH by running the command so that it can be called in the terminal.

```bash
# Add to .zprofile so the command will be executed at login time
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/<USERNAME>/.zprofile
# Run the command now so no re-login is needed
eval "$(/opt/homebrew/bin/brew shellenv)"
```

## Usage

The usage of `brew` is similar to that of other package managers like `apt` and `yum`. To see the help page, use the command

```bash
# Read help page
man brew
```

Here are some basic usage.

### Search packages

```bash
# Search packages
% brew search emacs
==> Formulae
emacs                                    emacs-dracula
emacs-clang-complete-async
==> Casks
homebrew/cask-versions/emacs-nightly     homebrew/cask/emacs
homebrew/cask-versions/emacs-pretest
```

Here `Formulae` is typically non GUI applications while `Casks` is for `brew cask`, which is an extension to `brew` that allows management of macOS native applications.

### Install & uninstall packages

```bash
# Install package
brew install <package name>
# Uninstall package
brew uninstall <package name>
# Install GUI package in casks
brew install --cask <package name>
```

### List packages

```bash
# List installed packages
brew list
# List all formulae packages that can be installed
brew formulae
# List all cask packages that can be installed
brew cask
```

### Upgrade packages

```bash
brew upgrade
```

## More Information

- [https://docs.brew.sh/Installation](https://docs.brew.sh/Installation)
- [https://docs.brew.sh/Manpage](https://docs.brew.sh/Manpage)
- [https://explainshell.com/explain?cmd=curl+-fsSL+example.org](https://explainshell.com/explain?cmd=curl+-fsSL+example.org)
