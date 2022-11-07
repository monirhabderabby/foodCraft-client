import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import loginImg from "../../../../Assets/images/undraw_chef_cu-0-r (1).svg";
import { Navbar } from "../../../shared/navbar/Navbar";

export const SignUp = () => {
    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
    });

    const navigate = useNavigate();

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log({
            email,
            password,
        });
    };
    return (
        <div>
            <Navbar />
            <div className=" max-w-[1170px] mx-auto h-[calc(100vh-80px)] flex items-center">
                <section className="w-full flex flex-col lg:flex-row justify-between items-start h-[70vh] px-3 lg:px-0">
                    <div className="relative flex-1">
                        <div className="max-w-[396px]">
                            <h1 className="text-[50px] text-navy-blue leading-[75px] font-600">Register to</h1>
                            <p className="text-[35px] leading-[52px] text-light-gray font-500">Food Craft</p>
                            <p className="text-[16px] leading-[24px] font-Inter font-400 mt-[33px] md:mt-[53px]">
                                Already have an account ? <br /> you can <span> </span>
                                <button className="text-[#4D47C3] font-600 z-50" onClick={() => navigate("/login")}>
                                    Login here!
                                </button>
                            </p>
                        </div>
                        <img className="w-full hidden lg:block absolute top-0 -z-10" src={loginImg} alt="login" />
                    </div>
                    <div className="w-full lg:w-[369px] h-auto">
                        <h3 className="mb-[28px] text-[30px] leading-[45px] font-serif font-500 text-navy-blue">Register</h3>
                        <form className="w-full lg:[350px]" onSubmit={handleLogin}>
                            <Stack spacing={"38px"} direction="column">
                                <TextField name="name" type="email" className="w-full" required id="outlined-required" label="Full Name" />
                                <TextField name="email" type="email" className="w-full" required id="outlined-required" label="Email" />
                                <FormControl sx={{ width: "100%" }} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={values.showPassword ? "text" : "password"}
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange("password")}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>
                                <div
                                    {...getRootProps()}
                                    className="h-[55px] bg-white border-[0.5px] border-light-gray flex items-center justify-center rounded-[4px] cursor-pointer"
                                >
                                    <input {...getInputProps()} />
                                    {isDragActive ? <p>Drop the files here ...</p> : <p>Drag 'n' drop photo, or click to select photo</p>}
                                </div>
                            </Stack>
                            <div className="flex justify-end mt-[17px]">
                                <button className="text-[#B0B0B0] text-14px font-400 font-Inter hover:text-black">Forget password</button>
                            </div>
                            <input
                                type="submit"
                                value="Login"
                                className="bg-red w-full h-[55px] mt-[38px] rounded-[4px] cursor-pointer text-white font-Inter"
                            />
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};
