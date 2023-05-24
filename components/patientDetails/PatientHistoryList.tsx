import * as React from 'react';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import ListItem from '@mui/material/ListItem';
import {Description} from "../../models/Description";



type Props = {
    descriptions:Description[];
};




export const PatientHistoryList:React.FC<Props> = (props:Props) => {
    function renderRow(props: ListChildComponentProps) {
        const { index, style,data } = props;

        return (
            <ListItem style={{ ...style,width:"21rem",textAlign: "left"}} key={index} component="div" disablePadding>

                <ListItemText
                    style={{...style}}
                    primaryTypographyProps={{
                        fontSize: 15,
                        color: 'primary.main',
                        marginLeft: "1rem"
                    }}
                    secondaryTypographyProps={{
                        fontSize: 13,
                        marginLeft: "2rem"
                    }}
                    secondary={`${data[index].dateTime} ${data[index].doctorName}`}
                    primary={`${data[index].description}`}/>


            </ListItem>
        );
    }
    return (
        <Box
            sx={{ width: '100%', maxWidth: 360, borderRadius:20, bgcolor: 'background.paper' }}
        >
            <FixedSizeList
                height={props.descriptions.length * 74}
                width={430}
                itemSize={37}
                itemCount={props.descriptions.length}
                overscanCount={5}
                itemData={props.descriptions}

            >
                {renderRow}
            </FixedSizeList>
        </Box>
    );
}