import BranchTable from "../../components/table/lids"
import GroupsTable from "../../components/table/groups"
import GroupModal from "../../components/modals/group"
import { useState } from "react";
import { Button } from "@mui/material";

const Index = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <GroupModal open={open} handleClose={handleClose} />
      <p className='text-[20px]'>
        Quyida har bir filialingiz uchun botning alohida havolasi berilgan. O’quvchi qaysi havola orqali o’tsa, aynan o’sha havola bog’langan filialga o’quvchi malumotlari kelib tushadi!
      </p>
      <div className="py-[30px]">
        <p className='text-[28px] mb-2 font-medium'>Filiallar</p>
        <BranchTable />
      </div>
      <div>
        <div className="flex items-center justify-between mb-3">
          <p className='text-[28px] font-medium'>Guruhlar</p>
          <Button onClick={() => setOpen(true)} sx={{backgroundColor: "#2CACE4", ":hover": { backgroundColor: "#2494CB" }}} variant="contained">
            Guruh qo'shish
          </Button>
        </div>
        <GroupsTable />
      </div>
    </div>
  )
}

export default Index;
