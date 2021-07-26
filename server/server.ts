import express from 'express';
import session from 'express-session';
import Keycloak from 'keycloak-connect';
import next from 'next';
import axios from 'axios';
import { apiVersion } from '../src/utils/api';
import { KeycloakState } from '../src/types/keycloak';
import { WorkspaceState } from '../src/types/workspace';

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const url = 'http://localhost:8080/raku_task';

app.prepare().then(() => {
  const server = express();
  server.use(express.json());
  server.use(express.static('public'));
  const memoryStore = new session.MemoryStore();
  const keycloak = new Keycloak({ store: memoryStore });
  server.use(
    session({
      secret: '572jfd-mv6bwe43nu1-dkui21qsda8-813ascxy0uw',
      resave: false,
      saveUninitialized: false,
    })
  );
  server.use(keycloak.middleware());
  server.get(
    `/${apiVersion}/api/:page/:method`,
    keycloak.protect(),
    (req, res) => {
      const getUrl = `${url}/${req.params.page}/${req.params.method}`;
      switch (`${req.params.page}/${req.params.method}`) {
        case 'workspace/get':
          axios
            .get(`${getUrl}`, {
              params: {
                id: req.query.userId,
                workspaceId: req.query.workspaceId,
              },
            })
            .then((response) => {
              const workspace: WorkspaceState = response.data;
              res.send(workspace);
            })
            .catch((err) => {
              console.log(err);
              res.status(err.statusCode).send(err);
            });
          break;
        default:
          axios
            .get(
              getUrl,
              req.query.id !== null
                ? {
                    params: { id: req.query.id },
                  }
                : undefined
            )
            .then((response) => {
              res.send(response.data);
            })
            .catch((err) => {
              console.log(err);
              res.status(err.statusCode).send(err);
            });
      }
    }
  );

  server.post(
    `/${apiVersion}/api/:page/:method`,
    keycloak.protect(),
    (req, res) => {
      const postUrl = `${url}/${req.params.page}/${req.params.method}`;
      axios
        .post(postUrl, req.body.params.data)
        .then((response) => {
          res.send(response.data);
        })
        .catch((err) => {
          console.log(err);
          res.status(err.statusCode).send(err);
        });
    }
  );

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err?: any) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
