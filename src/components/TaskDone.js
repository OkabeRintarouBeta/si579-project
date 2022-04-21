import { useContext } from 'react';
import {Item,SubItem} from './TodoList'
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import {toTomato} from "../utils";
import { SetupPomodoroContext } from "../context/SetupPomodoroContext";

const TaskDone=(props)=>{

    const {taskDone,dropTask}=props;
    return(

    <Item key={taskDone.name}>
        <div
            className="task-title">{taskDone.name}</div>
        <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={3}
            sx={{display:"flex",justifyContent:"center"}}
        >

            <SubItem>{taskDone.category}</SubItem>
            <SubItem>{taskDone.totalTime?taskDone.totalTime+" min":"Finished"} </SubItem>
            <SubItem>{taskDone.description}</SubItem>
        </Stack>

        <button className="button-under-text" onClick={dropTask} style={{marginRight:"20px"}} >Delete</button>

    </Item>
    )
}
export default TaskDone;