import BackupTableIcon from '@mui/icons-material/BackupTable';
import PaymentIcon from '@mui/icons-material/Payment';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
export const router = [
    {
        path: "/main",
        text: "Lidlar",
        icon: <BackupTableIcon />,
    },
    {
        path: "/main/bills",
        text: "Kunlik hisoblar",
        icon: <AccountBalanceWalletIcon />,
    },
    {
        path: "/main/payment",
        text: "Plugin uchun to’lov",
        icon: <PaymentIcon />,
    },
]