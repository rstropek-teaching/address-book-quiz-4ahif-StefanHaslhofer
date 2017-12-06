import {Next, Request, Response} from 'restify';
import {BadRequestError, NotFoundError} from 'restify-errors';
import {persons} from './data';

export function deletePerson(req: Request, res: Response, next: Next): void {
  const id = parseInt(req.params.id);
  if (id) {
    const personIndex = persons.filter(p => p.id === id)[0].id;
    let i=0;
    if (personIndex !== (-1)) {
      persons.splice(personIndex, 1);
      next();
    } else {
      next(new NotFoundError());
    }
  } else {
    next(new BadRequestError('Parameter id must be a number'));
  }
}