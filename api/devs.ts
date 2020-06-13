import axios from 'axios';

// https://banjdev-admin.herokuapp.com/user-profiles?_limit=10

export default async function(req, res) {
  try {
    const { headers, query } = req;
    const devs = await axios.get('https://banjdev-admin.herokuapp.com/user-profiles?_limit=10');
    
    const data = devs.data.map(dev => {
      const {name, email, login, avatar_url} = dev;
      return { name, email, login, avatar_url };
    });

    return res.json({ success: true, data });
  } catch(err) {
    console.log(err);
    res.statusCode = 500;
    return res.json({ success: false });
  }
}