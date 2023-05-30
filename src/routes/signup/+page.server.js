import { redirect } from '@sveltejs/kit';
import { OAuth2Client } from 'google-auth-library';
import {SECRET_KEY,SECRET_CLIENT} from '$env/static/private';

export async function load({locals,url,cookies}){

    //console.log(' load',url.origin)
    return{

    }

}

export const actions = {
    signup: async()=>{
        console.log("Nope!")
    },
    OAuth2: async({cookies,url,locals})=>{
        const redirectURL = 'http://localhost:5173/oauth';

        const oAuth2Client = new OAuth2Client(
            SECRET_CLIENT,
            SECRET_KEY,
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