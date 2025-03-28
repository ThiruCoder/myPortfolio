import React, { useEffect, useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Divider,
    IconButton,
    Paper,
    Link,
    InputAdornment,

} from '@mui/material';
import { motion } from "framer-motion";
import {
    Google as GoogleIcon,
    Twitter as TwitterIcon,
    GitHub as GitHubIcon,
    VisibilityOff,
    Visibility,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import './you.css'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/Firebase_config';

const LoginForm = () => {
    const [check, setCheck] = useState('');
    const [showLog, setShowLog] = useState(false)
    const navigate = useNavigate()
    function handleChecked(e) {
        const { value } = e.target;
        setCheck(value)
    }
    useEffect(() => {
        setTimeout(() => {
            if (check === 'yes') {
                setShowLog(!showLog)
            }
            if (check === 'no') {
                navigate(-1)
            }
        }, 800);
    }, [check])

    return (
        <>
            <Paper sx={{ display: showLog ? 'none' : 'flex', justifyContent: 'center', height: '100vh', bgcolor: '#111827' }}>
                <Box sx={{ margin: 'auto auto auto', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            margin: "0.25em 0",

                        }}
                    >
                        {/* Gradient Definitions */}
                        <svg height="0" width="0" viewBox="0 0 64 64" style={{ position: "absolute" }}>
                            <defs>
                                {/* Gradient for the first path */}
                                <linearGradient id="b" gradientUnits="userSpaceOnUse" y2="2" x2="0" y1="62" x1="0">
                                    <stop stopColor="#973BED" />
                                    <stop stopColor="#007CFF" offset="1" />
                                </linearGradient>

                                {/* Gradient for the second path */}
                                <linearGradient id="c" gradientUnits="userSpaceOnUse" y2="0" x2="0" y1="64" x1="0">
                                    <stop stopColor="#FFC800" />
                                    <stop stopColor="#F0F" offset="1" />
                                    <animateTransform
                                        repeatCount="indefinite"
                                        keySplines=".42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1"
                                        keyTimes="0; 0.125; 0.25; 0.375; 0.5; 0.625; 0.75; 0.875; 1"
                                        dur="8s"
                                        values="0 32 32;-270 32 32;-270 32 32;-540 32 32;-540 32 32;-810 32 32;-810 32 32;-1080 32 32;-1080 32 32"
                                        type="rotate"
                                        attributeName="gradientTransform"
                                    />
                                </linearGradient>

                                {/* Gradient for the third path */}
                                <linearGradient id="d" gradientUnits="userSpaceOnUse" y2="2" x2="0" y1="62" x1="0">
                                    <stop stopColor="#00E0ED" />
                                    <stop stopColor="#00DA72" offset="1" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* First SVG Path */}
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 64 64"
                            height="64"
                            width="64"
                            style={{ display: "inline-block" }}
                        >
                            <motion.path
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="8"
                                stroke="url(#b)"
                                d="M 54.722656,3.9726563 A 2.0002,2.0002 0 0 0 54.941406,4 h 5.007813 C 58.955121,17.046124 49.099667,27.677057 36.121094,29.580078 a 2.0002,2.0002 0 0 0 -1.708985,1.978516 V 60 H 29.587891 V 31.558594 A 2.0002,2.0002 0 0 0 27.878906,29.580078 C 14.900333,27.677057 5.0448787,17.046124 4.0507812,4 H 9.28125 c 1.231666,11.63657 10.984383,20.554048 22.6875,20.734375 a 2.0002,2.0002 0 0 0 0.02344,0 c 11.806958,0.04283 21.70649,-9.003371 22.730469,-20.7617187 z"
                                initial={{ strokeDasharray: "0 1 359 0", strokeDashoffset: 365 }}
                                animate={{
                                    strokeDasharray: ["0 1 359 0", "0 359 1 0", "359 1 0 0"],
                                    strokeDashoffset: [365, 5],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </motion.svg>

                        {/* Second SVG Path */}
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 64 64"
                            height="64"
                            width="64"
                            style={{ display: "inline-block" }}
                        >
                            <motion.path
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="10"
                                stroke="url(#c)"
                                d="M 32 32 m 0 -27 a 27 27 0 1 1 0 54 a 27 27 0 1 1 0 -54"
                                initial={{ strokeDasharray: "270 90", rotate: 0 }}
                                animate={{
                                    strokeDasharray: ["270 90", "0 360", "270 90"],
                                    rotate: [0, 270, 540, 810, 1080],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                style={{ transformOrigin: "center" }}
                            />
                        </motion.svg>

                        {/* Spacer */}
                        <Box sx={{ width: "0.5em" }} />

                        {/* Third SVG Path */}
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 64 64"
                            height="64"
                            width="64"
                            style={{ display: "inline-block" }}
                        >
                            <motion.path
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="8"
                                stroke="url(#d)"
                                d="M 4,4 h 4.6230469 v 25.919922 c -0.00276,11.916203 9.8364941,21.550422 21.7500001,21.296875 11.616666,-0.240651 21.014356,-9.63894 21.253906,-21.25586 a 2.0002,2.0002 0 0 0 0,-0.04102 V 4 H 56.25 v 25.919922 c 0,14.33873 -11.581192,25.919922 -25.919922,25.919922 a 2.0002,2.0002 0 0 0 -0.0293,0 C 15.812309,56.052941 3.998433,44.409961 4,29.919922 Z"
                                initial={{ strokeDasharray: "0 1 359 0", strokeDashoffset: 365 }}
                                animate={{
                                    strokeDasharray: ["0 1 359 0", "0 359 1 0", "359 1 0 0"],
                                    strokeDashoffset: [365, 5],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </motion.svg>

                    </Box>
                    <Box sx={{ py: 6 }}>
                        <Typography variant='h3' sx={{ color: 'white', fontWeight: 700, opacity: 0.8 }}>Are you an admin</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', gap: 5, position: 'relative', top: 14 }}>
                            <label className="container" id='no'>
                                <input type="radio" name='no' value='no' checked={check === 'no'} onChange={handleChecked} />
                                <div className="checkmark"></div>
                                <label htmlFor="no" style={{ color: 'white', fontWeight: 600, opacity: check === 'no' ? 0.8 : 0.2, position: 'relative', top: 6 }}>No</label>
                            </label>
                            <label className="container" id='yes'>
                                <input type="radio" name='yes' value='yes' checked={check === 'yes'} onChange={handleChecked} />
                                <div className="checkmark"></div>
                                <label htmlFor="yes" style={{ color: 'white', fontWeight: 600, opacity: check === 'yes' ? 0.8 : 0.2, position: 'relative', top: 6 }}>Yes</label>
                            </label>
                        </Box>
                    </Box>
                </Box>
            </Paper>

            <Loader showLog={showLog} />
        </>
    );
};

export default LoginForm;

// #1c273f

// Run this once to clear all IndexedDB databases
const clearIndexedDB = async () => {
    if (!window.indexedDB) return;
    try {
        const databases = await indexedDB.databases();
        databases.forEach((db) => indexedDB.deleteDatabase(db.name));
        console.log("All IndexedDB databases cleared!");
    } catch (error) {
        console.error("Error clearing IndexedDB:", error);
    }
};

clearIndexedDB();



const Loader = ({ showLog }) => {
    const navigate = useNavigate();
    const [formItems, setFormItems] = useState()
    const [newFormItems, setNewFormItems] = useState()
    const [error, setError] = useState(false)
    const [switcher, setSwitcher] = useState(0)
    const [hide, setHide] = useState(false)

    const [isLoggedIn, setIsLoggedIn] = useState(null)

    const handleForm = (e) => {
        const { name, value } = e.target;
        setFormItems(() => ({
            ...formItems,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('formItems', formItems);

        try {
            const logInCredantials = await signInWithEmailAndPassword(auth, formItems?.email, formItems?.password)
            console.log(logInCredantials.user);
            setError(false)
        } catch (error) {
            setError(true)
            console.log('SignIn error', error);

        }

    }


    const handleNewForm = (e) => {
        const { name, value } = e.target;
        setNewFormItems(() => ({
            ...newFormItems,
            [name]: value
        }))
    }

    const handleNewSubmit = async (e) => {
        e.preventDefault();
        console.log('newFormItems', formItems);

        try {
            const logInCredantials = await createUserWithEmailAndPassword(auth, newFormItems?.email, newFormItems?.password)
            console.log(logInCredantials.user);
            setError(false)
        } catch (error) {
            setError(true)
            console.log('SignUp error', error);

        }

    }

    const SwitchCase = () => {
        switch (switcher) {
            case 0:
                return (
                    // SignIn
                    <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit} >
                        {/* Username Input */}
                        <Box sx={{ mb: 2 }}>
                            <Typography
                                variant="body2"
                                sx={{ color: 'rgba(156, 163, 175, 1)', mb: 1 }}
                            >
                                Email
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="email@gmail.com"
                                variant="outlined"
                                onChange={handleForm}
                                name='email'
                                type='email'
                                sx={{
                                    backgroundColor: 'rgba(17, 24, 39, 1)',
                                    borderRadius: '0.375rem',
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'rgba(55, 65, 81, 1)',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'rgba(167, 139, 250)',
                                        },
                                    },
                                    '& .MuiInputBase-input': {
                                        color: 'rgba(243, 244, 246, 1)',
                                    },
                                }}
                            />
                        </Box>

                        {/* Password Input */}
                        <Box sx={{ mb: 2 }}>
                            <Typography
                                variant="body2"

                                sx={{ color: 'rgba(156, 163, 175, 1)', mb: 1 }}
                            >
                                Password
                            </Typography>
                            <TextField
                                fullWidth
                                type={hide ? 'text' : "password"}
                                placeholder="Password"
                                variant="outlined"
                                onChange={handleForm}
                                name='password'
                                sx={{
                                    backgroundColor: 'rgba(17, 24, 39, 1)',
                                    borderRadius: '0.375rem',
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'rgba(55, 65, 81, 1)',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'rgba(167, 139, 250)',
                                        },
                                    },
                                    '& .MuiInputBase-input': {
                                        color: 'rgba(243, 244, 246, 1)',
                                    },
                                }}
                                slotProps={{
                                    input: {
                                        endAdornment: <InputAdornment position="end" sx={{ cursor: 'pointer', color: 'white' }} onClick={() => setHide(!hide)}>{hide ? <VisibilityOff /> : <Visibility />}</InputAdornment>,
                                    },
                                }}
                            />
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    mt: 1,
                                }}
                            >
                                <Link
                                    href="#"
                                    sx={{
                                        fontSize: '0.75rem',
                                        color: 'rgba(156, 163, 175, 1)',
                                        textDecoration: 'none',
                                        '&:hover': {
                                            textDecoration: 'underline',
                                            color: 'rgba(167, 139, 250)',
                                        },
                                    }}
                                >
                                    Forgot Password?
                                </Link>
                            </Box>
                            <Box sx={{ display: error ? 'flex' : 'none' }}>
                                <Typography sx={{ color: 'wheat', fontWeight: 700 }} variant='body2'>Invalid credantial, Try again mr/miss {formItems?.uname}</Typography>
                            </Box>
                        </Box>

                        {/* Sign In Button */}
                        <Box sx={{ display: 'flex', flex: '20px 20px 30px', gap: 5 }}>
                            <Button
                                fullWidth
                                variant="contained"
                                onClick={() => navigate(-1)}
                                sx={{
                                    backgroundColor: 'rgba(167, 139, 250, 1)',
                                    color: 'rgba(17, 24, 39, 1)',
                                    borderRadius: '0.375rem',
                                    padding: '0.75rem',
                                    fontWeight: 600,
                                    '&:hover': {
                                        backgroundColor: 'rgba(167, 139, 250, 0.8)',
                                    },
                                }}
                            >
                                Back to home
                            </Button>
                            <Button
                                fullWidth
                                variant="contained"
                                type='submit'
                                sx={{
                                    backgroundColor: 'rgba(167, 139, 250, 1)',
                                    color: 'rgba(17, 24, 39, 1)',
                                    borderRadius: '0.375rem',
                                    padding: '0.75rem',
                                    fontWeight: 600,
                                    '&:hover': {
                                        backgroundColor: 'rgba(167, 139, 250, 0.8)',
                                    },
                                }}
                            >
                                Sign In
                            </Button>
                        </Box>

                    </Box>
                )

            case 1:
                return (
                    // SignUp
                    <Box component="form" sx={{ mt: 3 }} onSubmit={handleNewSubmit} >
                        {/* Username Input */}
                        <Box sx={{ mb: 2 }}>
                            <Typography
                                variant="body2"
                                sx={{ color: 'rgba(156, 163, 175, 1)', mb: 1 }}
                            >
                                Email
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="email@gmail.com"
                                variant="outlined"
                                onChange={handleNewForm}
                                name='email'
                                type='email'
                                sx={{
                                    backgroundColor: 'rgba(17, 24, 39, 1)',
                                    borderRadius: '0.375rem',
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'rgba(55, 65, 81, 1)',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'rgba(167, 139, 250)',
                                        },
                                    },
                                    '& .MuiInputBase-input': {
                                        color: 'rgba(243, 244, 246, 1)',
                                    },
                                }}
                            />
                        </Box>

                        {/* Password Input */}
                        <Box sx={{ mb: 2 }}>
                            <Typography
                                variant="body2"
                                sx={{ color: 'rgba(156, 163, 175, 1)', mb: 1 }}
                            >
                                Password
                            </Typography>
                            <TextField
                                fullWidth
                                type={hide ? "text" : 'password'}
                                placeholder="Password"
                                variant="outlined"
                                onChange={handleNewForm}
                                name='password'
                                iconButton={<Typography>asfjdhkads</Typography>}
                                sx={{
                                    backgroundColor: 'rgba(17, 24, 39, 1)',
                                    borderRadius: '0.375rem',
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'rgba(55, 65, 81, 1)',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'rgba(167, 139, 250)',
                                        },
                                    },
                                    '& .MuiInputBase-input': {
                                        color: 'rgba(243, 244, 246, 1)',
                                    },
                                }}

                                slotProps={{
                                    input: {
                                        endAdornment: <InputAdornment position="end" sx={{ cursor: 'pointer', color: 'white' }} onClick={() => setHide(!hide)}>{hide ? <VisibilityOff /> : <Visibility />}</InputAdornment>,
                                    },
                                }}
                            />
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    mt: 1,
                                }}
                            >
                                <Link
                                    href="#"
                                    sx={{
                                        fontSize: '0.75rem',
                                        color: 'rgba(156, 163, 175, 1)',
                                        textDecoration: 'none',
                                        '&:hover': {
                                            textDecoration: 'underline',
                                            color: 'rgba(167, 139, 250)',
                                        },
                                    }}
                                >
                                    Forgot Password?
                                </Link>
                            </Box>
                            <Box sx={{ display: error ? 'flex' : 'none' }}>
                                <Typography sx={{ color: 'wheat', fontWeight: 700 }} variant='body2'>Invalid credantial, Try again mr/miss {formItems?.uname}</Typography>
                            </Box>
                        </Box>

                        {/* Sign In Button */}
                        <Box sx={{ display: 'flex', flex: '20px 20px 30px', gap: 5 }}>
                            <Button
                                fullWidth
                                variant="contained"
                                onClick={() => navigate(-1)}
                                sx={{
                                    backgroundColor: 'rgba(167, 139, 250, 1)',
                                    color: 'rgba(17, 24, 39, 1)',
                                    borderRadius: '0.375rem',
                                    padding: '0.75rem',
                                    fontWeight: 600,
                                    '&:hover': {
                                        backgroundColor: 'rgba(167, 139, 250, 0.8)',
                                    },
                                }}
                            >
                                Back to home
                            </Button>
                            <Button
                                fullWidth
                                variant="contained"
                                type='submit'
                                sx={{
                                    backgroundColor: 'rgba(167, 139, 250, 1)',
                                    color: 'rgba(17, 24, 39, 1)',
                                    borderRadius: '0.375rem',
                                    padding: '0.75rem',
                                    fontWeight: 600,
                                    '&:hover': {
                                        backgroundColor: 'rgba(167, 139, 250, 0.8)',
                                    },
                                }}
                            >
                                Sign Up
                            </Button>
                        </Box>

                    </Box>
                )
        }
    }

    useEffect(() => {
        const unSubcriber = onAuthStateChanged(auth, (urrentUser) => {
            setIsLoggedIn(urrentUser)
        })
        return () => unSubcriber()
    }, [])

    if (isLoggedIn) {
        navigate('/AdminDashboard')
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                display: showLog ? 'flex' : 'none',
                justifyContent: 'center',
                height: '100vh',
                margin: 'auto',
            }}
        >

            <Paper
                elevation={3}
                sx={{
                    width: '45rem',
                    borderRadius: '0.75rem',
                    backgroundColor: 'rgba(17, 24, 39, 1)',
                    padding: '2rem',
                    color: 'rgba(243, 244, 246, 1)',

                }}
            >
                {/* Title */}
                <Typography
                    variant="h3"
                    sx={{
                        textAlign: 'center',
                        fontWeight: 700,
                        opacity: 0.8
                    }}
                >
                    {switcher ? 'SignUp' : 'SignIn'}
                </Typography>

                {/* Form */}
                {SwitchCase()}

                {/* Social Login Divider */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mt: 3,
                        color: 'rgba(156, 163, 175, 1)',
                    }}
                >
                    <Divider sx={{ flex: 1, backgroundColor: 'rgba(55, 65, 81, 1)' }} />
                    <Typography variant="body2" sx={{ px: 2 }}>
                        {switcher === 0 ? 'LogIn' : 'SignUp'} with social accounts
                    </Typography>
                    <Divider sx={{ flex: 1, backgroundColor: 'rgba(55, 65, 81, 1)' }} />
                </Box>

                {/* Social Icons */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mt: 2,
                    }}
                >
                    <IconButton
                        aria-label="Log in with Google"
                        sx={{
                            color: 'rgba(243, 244, 246, 1)',
                            '&:hover': {
                                backgroundColor: 'rgba(167, 139, 250, 0.1)',
                            },
                        }}
                    >
                        <GoogleIcon />
                    </IconButton>
                    <IconButton
                        aria-label="Log in with Twitter"
                        sx={{
                            color: 'rgba(243, 244, 246, 1)',
                            '&:hover': {
                                backgroundColor: 'rgba(167, 139, 250, 0.1)',
                            },
                        }}
                    >
                        <TwitterIcon />
                    </IconButton>
                    <IconButton
                        aria-label="Log in with GitHub"
                        sx={{
                            color: 'rgba(243, 244, 246, 1)',
                            '&:hover': {
                                backgroundColor: 'rgba(167, 139, 250, 0.1)',
                            },
                        }}
                    >
                        <GitHubIcon />
                    </IconButton>
                </Box>

                {/* Sign Up Link */}
                <Typography
                    variant="body2"
                    sx={{
                        textAlign: 'center',
                        mt: 2,
                        color: 'rgba(156, 163, 175, 1)',
                    }}
                >
                    Don't have an account?{' '}
                    {switcher === 0 ?
                        <Link
                            href="#"
                            onClick={() => setSwitcher(1)}
                            sx={{
                                color: 'rgba(243, 244, 246, 1)',
                                textDecoration: 'none',
                                '&:hover': {
                                    textDecoration: 'underline',
                                    color: 'rgba(167, 139, 250)',
                                },
                            }}
                        >
                            Sign Up
                        </Link>
                        : <Link
                            href="#"
                            onClick={() => setSwitcher(0)}
                            sx={{
                                color: 'rgba(243, 244, 246, 1)',
                                textDecoration: 'none',
                                '&:hover': {
                                    textDecoration: 'underline',
                                    color: 'rgba(167, 139, 250)',
                                },
                            }}
                        >
                            Sign In
                        </Link>}
                </Typography>
            </Paper>
        </motion.div>
    );
};



