import Userfront from "@userfront/react";

Userfront.init("6bgm6jgb");

export const SignupForm = Userfront.build({
  toolId: "mrdnba"
});

export const LoginForm = Userfront.build({
    toolId: "adoabl",
  });

export  const PasswordResetForm = Userfront.build({
    toolId: "omball",
  });

export const LogoutButton = Userfront.build({
    toolId: "dnorar"
  });

// export const Home = () => {
//     return <h2>Home</h2>;
//   }
  
//  export const Login = () => {
//     return <h2>Login</h2>;
//   }
  
//  export const PasswordReset = () => {
//     return <h2>Password Reset</h2>;
//   }
  
//   function Dashboard() {
//     return <h2>Dashboard</h2>;
//   }