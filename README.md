![NGV illustration](./public/assets/images/backgrounds/home-page/1_ngv_background.jpg)

# NGV Portal

## Getting Started

First, install the dependencies:

```bash
npm install
```

Build a proxy docker image which is used to serve NGV related static content locally from the production deployment:

```bash
npm run build-static-data-proxy
```

The script will ask credentials for the NGV Portal's production deployment (HTTP basic auth), once build,
can be started with:

```bash
npm run start-static-data-proxy
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000/ngv-portal](http://localhost:3000/ngv-portal) with your browser to see the result.

## Build for production

Compile the app in .next folder:

```bash
npm run build
```

