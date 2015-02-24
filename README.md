# generator-angular-agile [![Build Status](https://secure.travis-ci.org/kaanozcan/generator-angular-agile.png?branch=master)](https://travis-ci.org/kaanozcan/generator-angular-agile)

> [Yeoman](http://yeoman.io) generator

### Work In Progress
Before you go any further I need to clarify first that this is a still work in progress.

### So What Is This Thingy After All
This is a yo generator agile work flow kept in mind. If you use this generator you should use modules as much as possible. Just create your modules under app/features directory and build your dependency tree and grunt will compile it for you.

###v0.02

* improvements to home view
* angular module and package name configuration with prompt

###v0.0.1

*  grunt tasks concat relevant to your modules.
*  asynchronous views (controllers)

###Planned for next

* options (module name author etc.)
* less sass support


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-angular-agile from npm, run:

```bash
npm install -g generator-angular-agile
```

Finally, initiate the generator:

```bash
yo angular-agile
```

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

MIT
