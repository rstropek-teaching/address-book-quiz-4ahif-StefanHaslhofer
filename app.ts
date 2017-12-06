import {createServer, plugins} from 'restify';

import {getPersons} from './get-persons';
import {postPerson} from './post-person';
import {deletePerson} from './delete-person';

var server = createServer();

server.use(plugins.bodyParser());

server.get('/api/contacts', getPersons);
server.post('/api/contacts', postPerson);
server.del('/api/contacts/:id', deletePerson);

server.listen(8080, () => console.log('API is listening'));