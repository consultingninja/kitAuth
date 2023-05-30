import { redirect } from '@sveltejs/kit';
import { OAuth2Client } from 'google-auth-library';
import {SECRET_CLIENT_ID,SECRET_CLIENT_SECRET} from '$env/static/private';


export const actions = {
    OAuth2: async({})=>{
        const redirectURL = 'http://localhost:5173/oauth';

        console.log('id',SECRET_CLIENT_ID)

        const oAuth2Client = new OAuth2Client(
            SECRET_CLIENT_ID,
            SECRET_CLIENT_SECRET,
            redirectURL
          );
      
          // Generate the url that will be used for the consent dialog.
          const authorizeUrl = oAuth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: 'https://www.googleapis.com/auth/userinfo.profile  openid ',
            prompt: 'consent'
          });

          throw redirect(302,authorizeUrl);
      

    

    }

}