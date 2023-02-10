import React, { useState } from "react";

interface Props {
	title: string;
	useMutate: () => {} | undefined;
	loading: boolean;
}

interface StateForm {
	datos: {
		name: string;
		password: string;
		email: string;
	};
}

const Form = ({ title, useMutate, loading }: Props) => {
	const [datos, setDatos] = useState<StateForm["datos"]>({
		name: "",
		password: "",
		email: "",
	});
	const [showPassword, setShowPassword] = useState(false);

	const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		setDatos({
			...datos,
			[evt.target.name]: evt.target.value,
		});
	};

	const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		console.log(datos);
		useMutate(datos);
	};
	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	/*variable para la interfaz */
	const lenghtPassword = datos.password.length;

	const menorA5 = lenghtPassword > 0 && lenghtPassword < 5;
	const menorA10 = lenghtPassword >= 5 && lenghtPassword < 10;
	const mayorA10 = lenghtPassword >= 10;

	return (
		<div className="h-screen bg-gradient-to-br from-blue-600 to-indigo-600 flex justify-center items-center w-full">
			<form onSubmit={handleSubmit} method='post'>
				<div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
					<div className="space-y-4">
						<h1 className="text-center text-2xl font-semibold text-gray-600">
							{title}
						</h1>
						{title.toLocaleLowerCase() == "registrate" && (
							<div>
								<label
									htmlFor="email"
									className="block mb-1 text-gray-600 font-semibold"
								>
									nombre de Usuario
								</label>

								<input
									onChange={handleChange}
									type="text"
									className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
									name='name'
									required
								/>
							</div>
						)}
						<div>
							<label
								htmlFor="email"
								className="block mb-1 text-gray-600 font-semibold"
							>
								Email
							</label>

							<input
								onChange={handleChange}
								type="email"
								className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
								name='email'
								required
							/>
						</div>

						<div className="relative">
							<label
								htmlFor="email"
								className="block mb-1 text-gray-600 font-semibold"
							>
								Contraseña
							</label>

							<input
								onChange={handleChange}
								type={showPassword ? "text" : "password"}
								className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
								name='password'
								required
								minLength={8}
							/>
							<div className="absolute   bottom-2 right-2">
								<svg
									/* onClick={handleClickShowPassword} */
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
									<circle cx="12" cy="12" r="3"></circle>
									{!showPassword && <line x1="1" y1="1" x2="23" y2="23"></line>}
								</svg>
							</div>
						</div>
						<div className={`grid grid-flow-col grid-cols-3`}>
							<span
								className={`h-1  
          ${menorA5 && "bg-orange-500 col-span-1"}
          ${menorA10 && "col-span-2 bg-yellow-500"} 
          ${mayorA10 && "col-span-3 bg-green-500"}`}
							></span>
						</div>
						<div>
							{menorA5 && "contraseña debil"}
							{menorA10 && "contraseña Medio"}
							{mayorA10 && "contraseña Fuerte"}
						</div>
					</div>
					<button className="h-12 mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide grid place-content-center">
						{loading ? (
							<span className="w-8 h-8 border-4 border-white border-b-red-600 rounded-full inline-block box-border animate-spin"></span>
						) : (
							title
						)}
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
