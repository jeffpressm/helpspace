import React from 'react';
import EmailForm from 'components/form/EmailForm';

const MailChimpForm = () => (
  <EmailForm
    formProps={{
      action:
        'https://gmail.us19.list-manage.com/subscribe/post?u=39864d7e93b101191538b1a6b&amp;id=6a4a320bb5',
      method: 'post',
      target: '_blank',
    }}
    inputProps={{ name: 'EMAIL' }}
  >
    <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
      <input
        type="text"
        name="b_39864d7e93b101191538b1a6b_6a4a320bb5"
        tabIndex="-1"
        value=""
        readOnly
      />
    </div>
  </EmailForm>
);

export default MailChimpForm;
