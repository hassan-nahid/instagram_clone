import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)

    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    })
    const { loading, error, login } = useLogin()
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
            <Button w={'full'} isLoading={loading} colorScheme="blue" size={"sm"} fontSize={14} onClick={() => login(inputs)}>
                Log in
            </Button>
        </>
    );
};

export default Login;