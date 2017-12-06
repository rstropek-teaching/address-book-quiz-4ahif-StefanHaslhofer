import {Next, Request, Response} from 'restify';
import {BadRequestError} from 'restify-errors';
import {persons, IPerson} from './data';

export function postPerson(req: Request, res: Response, next: Next): void {
  if (!req.body.id || !req.body.firstName || !req.body.lastName || !req.body.email) {
    next(new BadRequestError('Missing mandatory member(s)'));
  } else {
    const newPersonId = parseInt(req.body.id);
    if (!newPersonId) {
      next(new BadRequestError('ID has to be a numeric value'));
    } else {
      const newPerson: IPerson = { id: newPersonId,
        firstName: req.body.firstName, lastName: req.body.lastName , email: req.body.email};
      persons.push(newPerson);
    }
  }
}