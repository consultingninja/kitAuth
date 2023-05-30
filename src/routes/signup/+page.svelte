<script>
    export let form;
</script>
    
    
    <div class="sign-in-wrapper">
        <div class="sign-in-content">
        <h2>Sign Up to Consulting Ninja</h2>
     <form class="auth-form" method="post" action="?/OAuth2">
        <div>
            <button class="btn-auth"  type="submit">
            <img class="btn-auth-img" src='/google_signin_buttons/web/1x/btn_google_signin_dark_pressed_web.png' alt='google sign in'/>
            </button>
        </div>

    </form> 

    </div>
    </div>
    
    <style>
        div{
            color: #000000;
            margin-bottom: .5em;
            text-shadow: 0 0 2px #ffffff;
        }

        button{
            width: 100%;
            background-color: #FFF;
            transition: all 0.3s ease-in;
        }
        button:hover{
            cursor: pointer;
            text-decoration: underline;
            color: #FFF;
            background-color: #4d4c4c;
            transition: all 0.3s ease-in;
        }


        .btn-auth-img:hover{
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

        }
        .btn-auth{
            border:0;
            background-color: rgba(84, 81, 81, 0.0);
            padding:.01em;
        }
        .btn-auth:hover{
            border:0;
            padding:.01em;
            text-decoration: none;
            background-color: rgba(84, 81, 81, 0.0);
        }
        .auth-form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
        .sign-in-wrapper{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            height: 100vh;
            width:100%;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            
        }
        .sign-in-content{
            max-width: 350px;
            background-color: rgba(84, 81, 81, 0.35);
            padding:1em;
            border-radius: 5px;
        }

        .sign-in-wrapper{
            height: 100vh;
        }

    </style>