# Riverhaven

This repository contains the code for the Riverhaven website

# Dependencies

- GNU Make
- Python3
- Sass
- entr (development only)

If you are are on ubuntu, you can install all of these by running:

```
make install_ubuntu_dev_deps
```

# Development

You can launch a development server by running:

```
make dev
```

This will launch a webserver on `localhost:8000`, and it will automatically build the site whenever a file changes in the `src/` directory.

# Templating

You can create html templates in the `src/include` directory and include them in another file like so:

```
<!--include filename.html-->
```

This comes in handy for re-using common components like a navbar, footer, etc.
