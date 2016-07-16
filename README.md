# To
A command line utility to easily cd into directories or open files.

# Install

```
$ npm install -g to-cli # Downloads the to package
$ to setup # Sets up the to alias
```

# Usage

**Create an alias**

```
$ to workspace ~/Documents/Workspace # Creates an alias to workspace
```
*Note*: Relative paths are resolved to absolute paths.

**Access an alias**

```
$ to workspace # cds into ~/Documents/Workspace
$ to workspace/myfile.txt # opens ~/Dowcument/Worskpace/myfile.txt with the $EDITOR
```

**Remove an alias**

```
$ to workspace --remove
```

**List all aliases**

```
$ to --list
```

**Display help**

```
$ to
```

# Contributing

The goal of the project is to keep it as simple as possible. Additional features that add complexity to the command line syntax or diminish load times will most likely be rejected.

To contribute:

- Fork this repository
- Make your changes
- Ensure the code is working (tests would be great btw)
- Ensure that your code is in spec with jslint
- Ensure your fork is up to date with the master repository
- Submit a pull request

# Compatiblity

'To' has been tested on Mac OS X and lightly on Linux. It is compatible with ZSH along with bash and plain old shell. There is no support for windows currently (pull requests are welcome).


# Todo

- Add Tests
- Refactor / Rewrite Code. This is the first (dirty) iteration
- [Potenital] Allow shell scripts to be set as aliases
- [Potential] Allow 'to' to execute files instead of open them if a proper flag is given

# License

See LICENSE
