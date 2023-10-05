import UseInput from "../hooks/use-input";

const SimpleInput = (props) => {

	
	const {
		value: enteredName,
		isValid: enteredNameIsValid,
		hasError: nameInputHasError,
		valueChangeHandler: nameChangedHandler,
		inputBlurHandler: nameBlurHandler,
		reset: resetNameInput
	} = UseInput(value => value.trim() !== "");

	const {
		value: enteredEmail,
		isValid: enteredEmailIsValid,
		hasError: emailInputHasError,
		valueChangeHandler: emailChangedHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmailInput
	} = UseInput(value => value.includes("@"));

	let formIsValid = false





		if (enteredNameIsValid && enteredEmailIsValid) { // name && age && textarea
			formIsValid = true
		} else {
			formIsValid = false
		}

		const submit = (e) => {
			e.preventDefault();

		if (!enteredNameIsValid) {		
			return;
		}

		resetNameInput();
		resetEmailInput();
	};

	const inputClass = nameInputHasError ? 'form-control invalid' : 'form-control';

	const emailClass = emailInputHasError ? "form-control invalid" : "form-control"

	return (
		<form onSubmit={submit}>
			<div className={inputClass}>
				<label htmlFor="name">Your Name</label>
				<input 
					onChange={nameChangedHandler}
					onBlur={nameBlurHandler} 
					value={enteredName}
					type="text" 
					id="name" 
				/>
				{nameInputHasError && <p className="error-text">error</p>}
			</div>
			<div className={emailClass}>
				<label htmlFor="email">Email</label>
				<input 
					onChange={emailChangedHandler}
					onBlur={emailBlurHandler} 
					value={enteredEmail}
					type="email" 
					id="email" 
				/>
				{emailInputHasError && <p className="error-text">Need valid email</p>}
			</div>
			
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
