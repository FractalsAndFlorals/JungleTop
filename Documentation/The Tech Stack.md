# The Tech Stack

### <mark>Revision Alpha 0.0.1</mark>

##### Table with links to libraries at the end of the document

<u>Bootstrapping the app through a native language</u>

- Go-lang chosen for this

- Additional styling to be using the Charm library

<u>Micro-services layer ran as some kind of node server</u>

- Express is probably a good choice here

- Service to be run as a RESTful API service

    - Where each service hits a specific local port which updates the db, where the UI can pull from

- The db of choice here is Realm, a no-SQL lightweight db that can serialize objects ( originally designed independently
  for mobile devices, now managed by mongo-db )

<u>The Final layer is the display layer which will try to emulate a terminal across all platforms</u>

- To achieve a terminal like output the *xterm* npm library looks promising for this

- To achieve a reactive design and to handle auto-updating, the React library will be used, to take advantage of virtual
  DOM and JSX syntactical sugar

- Further, styling of the front-end will be done using tailwindcss library + daisy-ui plugin

| Technology                                                | Associated Website                                                                        |
|-----------------------------------------------------------|-------------------------------------------------------------------------------------------|
| <mark style="background:red">Charm Go-lang Library</mark> | ~~https://charm.sh/~~ has been replaced by terminal-kit                                   |  
| Express js                                                | https://expressjs.com/                                                                    |
| Realm db                                                  | https://realm.io/                                                                         |
| xterm terminal emulator                                   | https://xtermjs.org/                                                                      |
| <mark>React</mark>                                        | **https://reactjs.org/** considering replacement with preact <br/>`https://preactjs.com/` |
| Tailwindcss                                               | https://tailwindcss.com/                                                                  |
| Daisyui (plugin for tailwind)                             | https://daisyui.com/                                                                      |
| terminal-kit                                              | https://github.com/cronvel/terminal-kit                                                   |


##### Package Management
It seems like both npm and yarn are used for package management,
but they can be used interchangeably.
