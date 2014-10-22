#My Money
General description

##Prerequisites
1. Visual Studio (or MSBuild)
2. [Node.JS](www.nodejs.org)

*The project uses* **Grunt** *to perform the various dev tasks. Install the Grunt-Cli globally to run grunt commands*
npm install -g grunt-cli

##Build
1. cd to project folder
2. Run **grunt build**

##Test
1. cd to project folder
2. Run **grunt test**

##Visual Studio Integration
1. To run grunt commands from Visual Studio install the [Task Runner Explorer](https://visualstudiogallery.msdn.microsoft.com/8e1b4368-4afb-467a-bc13-9650572db708) extension
2. To run the NUnit tests from the Visual Studio Test Explorer install the [NUnit Test Adapter](https://visualstudiogallery.msdn.microsoft.com/6ab922d0-21c0-4f06-ab5f-4ecd1fe7175d) extension
3. To run the Karma tests from the Visual Studio Test Explorer install the [Karma Test Adapter](https://visualstudiogallery.msdn.microsoft.com/4cd59e4a-82e8-4b4e-8302-d102fc81b090) extension

*The Karma extension relies on the npm module* **karma-vs-reporter** *that is already installed on the project node_modules*
