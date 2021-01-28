import React , {useState}  from 'react';
import "../css/Login.css";
import TextField from '@material-ui/core/TextField';
import Logo from '../img/imgbin_amazon-logo-png.png';
import {useHistory} from 'react-router-dom';
import {auth, provider} from '../firebase.config';

function Login() {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();

	const signIn = e => {
		e.preventDefault();
		if(email) {
			if(password) {
				auth.signInWithEmailAndPassword(email, password)
				.then(auth => {
					history.push('/')
				})
				.catch(err => alert(err.message));
			} else {
				alert("password field can not be empty");
			}
		} else {
			alert("email field can not be empty");
		}
	};

	const register = e => {
		e.preventDefault();
		if(email) {
			if(password) {
				auth.createUserWithEmailAndPassword(email, password)
				.then(auth => {
					if(auth) {
						history.push('/')
					}
				})
				.catch((err) => alert(err.message));
			} else {
				alert("password field can not be empty");
			}
		} else {
			alert("email field can not be empty");
		}
	};

	return (
		<section className="login">
			<img
				className='login-logo'
				src={Logo}
				alt='amazon_logo'
			/>
			<form>
				<h2>Sign In</h2>
				<TextField
					className='textfield'
					label="E-mail"
					value={email}
					onChange={e => setEmail(e.target.value)}
					variant="outlined" />
				<br/>
				<TextField
					className='textfield'
					type="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
					label="password"
					variant="outlined" />
				<br/>
				<button onClick={signIn} type="submit" className="sign-in">Sign In</button>
				<p>
					By signin you agree to the <strong>AMAZON FAKE CLONE</strong> condition and privacy.
				</p>
				<button onClick={register} type="submit" className="register">Create your amazon account</button>
			</form>
		</section>
	);
}
export default Login;