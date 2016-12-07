import { ContactsConstants, ContactsActions } from '../actions/contacts_actions';
import ContactsAPIUtil from '../util/contacts_api_util';

const ContactsMiddleware = ({ dispatch }) => next => action => {
  switch(action.type) {
    default:
      return next(action);
  }
};

export default ContactsMiddleware;
