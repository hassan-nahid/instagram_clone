import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import useSignUpWithEmailPassword from "../../hooks/useSignUpWithEmailPassword";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        email: '',
    })
    const { loading, error, signup } = useSignUpWithEmailPassword()
    return (
        <>
            <Input
                placeholder="Email"
                fontSize={14}
                type="email"
                size={"sm"}
                value={inputs.email}
                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
            <Input
                placeholder="Username"
                fontSize={14}
                type="text"
                size={"sm"}
                value={inputs.username}
                onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />
            <Input
                placeholder="Full Name"
                fontSize={14}
                type="text"
                size={"sm"}
                value={inputs.fullName}
                onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            />
            <InputGroup>
                <Input
                    placeholder="Password"
                    fontSize={14}
                    type={showPassword ? "text" : "password"}
                    value={inputs.password}
                    size={"sm"}
                    onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                />
                <InputRightElement h={"full"}>
                    <Button variant={"ghost"} size={"sm"} onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                </InputRightElement>
            </InputGroup>
            {error && (
                <Alert display={"flex"} status="error" fontSize={13} p={2} borderRadius={4}>
                    <AlertIcon fontSize={12} />
                    {error.message}
                </Alert>
            )}

            <Button w={'full'} colorScheme="blue" isLoading={loading} onClick={() => signup(inputs)} size={"sm"} fontSize={14}>
                Sign Up
            </Button>
        </>
    );
};

export default Signup;