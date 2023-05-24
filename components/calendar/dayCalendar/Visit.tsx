import React, {useCallback, useContext, useEffect, useState} from "react"
import {
    UpperJawLeftEight,
    Jaw,
    UpperJawLeftSeven,
    UpperJawLeftSecond,
    UpperJawLeftThird,
    UpperJawLeftFour,
    UpperJawLeftFive,
    UpperJawLeftSix,
    UpperJawLeftFirst,
    UpperJawRightFirst,
    UpperJawRightSecond,
    UpperJawRightThird,
    UpperJawRightFour,
    UpperJawRightFive,
    UpperJawRightSix,
    UpperJawRightSeven,
    UpperJawRightEight,
    DownJawLeftFirst,
    DownJawLeftSecond,
    DownJawLeftThird,
    DownJawLeftFour,
    DownJawLeftSix,
    DownJawRightFirst,
    DownJawRightSecond,
    DownJawRightThird,
    DownJawRightFour,
    DownJawRightFive,
    DownJawRightSix,
    DownJawRightSeven, DownJawRightEight, DownJawLeftEight, DownJawLeftSeven, DownJawLeftFive, Box,
} from "./Jaw.styles";
import {
    Description,
    VisitBody, VisitOptions, TeethOptions, ToothDescription,
    ToothStatus,StatusLabel,StatusCheckbox, ToothDescriptionTextField,
    ToothDescriptionHistory, PatientInformation, Descriptions,
    ToothDescriptionSaveButton, DescriptionTitle, DescriptionRow, ToothNumberText,ToothText,PatientInfoText

} from "./DayCalendar.styles";
import UpLEight from "../../../resources/img/Jaw/8-UP-L.png";
import UpLSeven from "../../../resources/img/Jaw/7-UP-L.png";
import UpLSix from "../../../resources/img/Jaw/6-UP-L.png";
import UpLFive from "../../../resources/img/Jaw/5-UP-L.png";
import UpLFour from "../../../resources/img/Jaw/4-UP-L.png";
import UpLThird from "../../../resources/img/Jaw/3-UP-L.png";
import UpLSecond from "../../../resources/img/Jaw/2-UP-L.png";
import UpLFirst from "../../../resources/img/Jaw/1-UP-L.png";
import UpREight from "../../../resources/img/Jaw/8-UP-R.png";
import UpRSeven from "../../../resources/img/Jaw/7-UP-R.png";
import UpRSix from "../../../resources/img/Jaw/6-UP-R.png";
import UpRFive from "../../../resources/img/Jaw/5-UP-R.png";
import UpRFour from "../../../resources/img/Jaw/4-UP-R.png";
import UpRThird from "../../../resources/img/Jaw/3-UP-R.png";
import UpRSecond from "../../../resources/img/Jaw/2-UP-R.png";
import UpRFirst from "../../../resources/img/Jaw/1-UP-R.png";
import DownLEight from "../../../resources/img/Jaw/8-DOWN-L.png";
import DownLSeven from "../../../resources/img/Jaw/7-DOWN-L.png";
import DownLSix from "../../../resources/img/Jaw/6-DOWN-L.png";
import DownLFive from "../../../resources/img/Jaw/5-DOWN-L.png";
import DownLFour from "../../../resources/img/Jaw/4-DOWN-L.png";
import DownLThird from "../../../resources/img/Jaw/3-DOWN-L.png";
import DownLSecond from "../../../resources/img/Jaw/2-DOWN-L.png";
import DownLFirst from "../../../resources/img/Jaw/1-DOWN-L.png";
import DownREight from "../../../resources/img/Jaw/8-DOWN-R.png";
import DownRSeven from "../../../resources/img/Jaw/7-DOWN-R.png";
import DownRSix from "../../../resources/img/Jaw/6-DOWN-R.png";
import DownRFive from "../../../resources/img/Jaw/5-DOWN-R.png";
import DownRFour from "../../../resources/img/Jaw/4-DOWN-R.png";
import DownRThird from "../../../resources/img/Jaw/3-DOWN-R.png";
import DownRSecond from "../../../resources/img/Jaw/2-DOWN-R.png";
import DownRFirst from "../../../resources/img/Jaw/1-DOWN-R.png";
import {CalendarContext} from "../../../context/CalendarContext";
import {Tooth} from "../../../models/Tooth";
import {VisitApi} from "../../../api/VisitApi";
import {ClinicContext} from "../../../context/ClinicContext";
import { TeethApi } from "../../../api/TeethApi";
import {VirtualizedList} from "./ToothNoteList";
import dayjs from "dayjs";
import {toast} from "react-toastify";






type Props = {

};

export  const Visit: React.FC<Props> = (props:Props) =>{
    const {currentVisit} = useContext(CalendarContext);
    const [teeth,setTeeth] = useState<Tooth[]>([]);
    const [currentTooth,setCurrentTooth] = useState <Tooth|null>(null);
    const [forObservation,setForObservation]=useState<boolean>(false)
    const [caries,setCaries]=useState<boolean>(false)
    const [secondaryCaries,setSecondaryCaries]=useState<boolean>(false)
    const [filling,setFilling]=useState<boolean>(false)
    const [prostheticCrown,setProstheticCrown]=useState<boolean>(false)
    const [channelsFilledCorrectly,setChannelsFilledCorrectly]=useState<boolean>(false)
    const [channelNotCompleted,setChannelNotCompleted]=useState<boolean>(false)
    const [periapicalChange,setPeriapicalChange]=useState<boolean>(false)
    const [crownRootInsert,setCrownRootInsert]=useState<boolean>(false)
    const [supragingivalCalculus,setSupragingivalCalculus]=useState<boolean>(false)
    const [subgingivalCalculus,setSubgingivalCalculus]=useState<boolean>(false)
    const [impactedTooth,setImpactedTooth]=useState<boolean>(false)
    const [noTooth,setNoTooth]=useState<boolean>(false)
    const [microdonticTooth,setMicrodonticTooth]=useState<boolean>(false)
    const [developmentalDefect,setDevelopmentalDefect]=useState<boolean>(false)
    const [pathologicalClash,setPathologicalClash]=useState<boolean>(false)
    const [toothName,setToothName] = useState("");
    const [descriptionTooth, setDescriptionTooth] = useState("")
    const {currentClinic} = useContext(ClinicContext);

    function handleChoseTooth(event:React.MouseEvent<HTMLImageElement>,tooth:Tooth)  {
        setToothName(event.currentTarget.alt)
        setCurrentTooth(tooth);
        if(!tooth.description)setDescriptionTooth("")
        else setDescriptionTooth(tooth.description);
        setCaries(tooth.caries);
        setNoTooth(tooth.noTooth);
        setFilling(tooth.filling);
        setForObservation(tooth.forObservation)
        setSecondaryCaries(tooth.secondaryCaries)
        setProstheticCrown(tooth.prostheticCrown)
        setChannelsFilledCorrectly(tooth.channelsFilledCorrectly)
        setChannelNotCompleted(tooth.channelNotCompleted)
        setPeriapicalChange(tooth.periapicalChange)
        setCrownRootInsert(tooth.crownRootInsert)
        setSupragingivalCalculus(tooth.supragingivalCalculus)
        setSubgingivalCalculus(tooth.subgingivalCalculus)
        setImpactedTooth(tooth.impactedTooth)
        setMicrodonticTooth(tooth.microdonticTooth)
        setDevelopmentalDefect(tooth.developmentalDefect)
        setPathologicalClash(tooth.pathologicalClash)
    };

    const saveVisitDescription = useCallback(async (event:React.ChangeEvent<HTMLTextAreaElement>) =>{
        try {
            await VisitApi.saveDescription({
                clinicId: currentClinic?.id,
                visitId: currentVisit?.id,
                doctorDescription: event.target.value
            })
        }catch (error){
            toast.error("Wystąpił błąd podczas połączenia z serwerem.", {
                position: toast.POSITION.TOP_RIGHT,
            });
        }

    },[currentClinic?.id,currentVisit?.id]);

    const saveToothStatus = useCallback(async () =>{
        try {
            await TeethApi.saveToothStatus({
                clinicId: currentClinic?.id,
                patientId: currentVisit?.patient.patientId,
                tooth: currentTooth,
            })
        }catch (error){
            toast.error("Wystąpił błąd podczas połączenia z serwerem.", {
                position: toast.POSITION.TOP_RIGHT,
            });
        }

    },[currentClinic?.id,currentTooth,currentVisit?.patient.patientId]);

    const saveToothDescription = useCallback(async () =>{
        if(descriptionTooth.length > 5){
        try{
            await TeethApi.saveToothDescription({
                clinicId: currentClinic?.id,
                patientId: currentVisit?.patient.patientId,
                doctorName: currentVisit?.doctor.firstName + " " + currentVisit?.doctor.lastName,
                currentDateTime: dayjs(new Date).format("YYYY-MM-DD HH:mm"),
                tooth: currentTooth,
            })
            if(currentTooth){
                currentTooth.descriptions.push({id:currentTooth.descriptions.length > 0
                        ? currentTooth.descriptions.sort((b, a) => b.id - a.id)[currentTooth.descriptions.length-1].id + 1
                        : 1,description:descriptionTooth,
                    dateTime: dayjs(new Date).format("YYYY-MM-DD HH:mm"),
                    doctorName: currentVisit?.doctor.firstName + " " + currentVisit?.doctor.lastName})
                currentTooth.description = "";
            }
            setDescriptionTooth("")
        }catch (e){
            toast.error("Wystąpił błąd podczas połączenia z serwerem.", {
                position: toast.POSITION.TOP_RIGHT,
            });
        }}

    },[currentClinic?.id,currentTooth,currentVisit?.patient.patientId,descriptionTooth, currentVisit?.doctor.email, currentVisit?.doctor.firstName, currentVisit?.doctor.lastName]);
    function changeToothDescription(event:React.ChangeEvent<HTMLTextAreaElement>){
        if(currentTooth)
            currentTooth.description = event.target.value;
        setDescriptionTooth(event.target.value)
    }
    function changeCariesStatus(){
        if(currentTooth)
            currentTooth.caries = !currentTooth.caries;
        setCaries(!caries);
        saveToothStatus()
    }
    function changeNoToothStatus(){
        if(currentTooth)
            currentTooth.noTooth = !currentTooth.noTooth;
        setNoTooth(!noTooth);
        saveToothStatus()
    }
    function changeFillingStatus(){
        if(currentTooth)
            currentTooth.filling = !currentTooth.filling;
        setFilling(!filling);
        saveToothStatus()
    }
    function changeForObservationStatus(){
        if(currentTooth)
            currentTooth.forObservation = !currentTooth.forObservation;
        setForObservation(!forObservation);
        saveToothStatus()
    }
    function changeSecondaryCariesStatus(){
        if(currentTooth)
            currentTooth.secondaryCaries = !currentTooth.secondaryCaries;
        setSecondaryCaries(!secondaryCaries);
        saveToothStatus()
    }
    function changeProstheticCrownStatus(){
        if(currentTooth)
            currentTooth.prostheticCrown = !currentTooth.prostheticCrown;
        setProstheticCrown(!prostheticCrown);
        saveToothStatus()
    }
    function changeChannelsFilledCorrectlyStatus(){
        if(currentTooth)
            currentTooth.channelsFilledCorrectly = !currentTooth.channelsFilledCorrectly;
        setChannelsFilledCorrectly(!channelsFilledCorrectly);
        saveToothStatus()
    }
    function changeChannelNotCompletedStatus(){
        if(currentTooth)
            currentTooth.channelNotCompleted = !currentTooth.channelNotCompleted;
        setChannelNotCompleted(!channelNotCompleted);
        saveToothStatus()
    }
    function changePeriapicalChangeStatus(){
        if(currentTooth)
            currentTooth.periapicalChange = !currentTooth.periapicalChange;
        setPeriapicalChange(!periapicalChange);
        saveToothStatus()
    }
    function changeCrownRootInsertStatus(){
        if(currentTooth)
            currentTooth.crownRootInsert = !currentTooth.crownRootInsert;
        setCrownRootInsert(!crownRootInsert);
        saveToothStatus()
    }
    function changeSupragingivalCalculusStatus(){
        if(currentTooth)
            currentTooth.supragingivalCalculus = !currentTooth.supragingivalCalculus;
        setSupragingivalCalculus(!supragingivalCalculus);
        saveToothStatus()
    }
    function changeSubgingivalCalculusStatus(){
        if(currentTooth)
            currentTooth.subgingivalCalculus = !currentTooth.subgingivalCalculus;
        setSubgingivalCalculus(!subgingivalCalculus);
        saveToothStatus()
    }
    function changeImpactedToothStatus(){
        if(currentTooth)
            currentTooth.impactedTooth = !currentTooth.impactedTooth;
        setImpactedTooth(!impactedTooth);
        saveToothStatus()
    }
    function changeMicrodonticToothStatus(){
        if(currentTooth)
            currentTooth.microdonticTooth = !currentTooth.microdonticTooth;
        setMicrodonticTooth(!microdonticTooth);
        saveToothStatus()
    }
    function changeDevelopmentalDefectStatus(){
        if(currentTooth)
            currentTooth.developmentalDefect = !currentTooth.developmentalDefect;
        setDevelopmentalDefect(!developmentalDefect);
        saveToothStatus()
    }
    function changePathologicalClashStatus(){
        if(currentTooth)
            currentTooth.pathologicalClash = !currentTooth.pathologicalClash;
        setPathologicalClash(!pathologicalClash);
        saveToothStatus()
    }
    useEffect(() => {
        if(currentVisit){
            setTeeth(currentVisit.patient.teeth.sort((a,b) => a.number-b.number))
            setCurrentTooth(null)
        }
    },[currentVisit])
    return(
       <VisitBody>
           {currentVisit && (
               <>
                   <Box>
                       <PatientInformation>
                           <PatientInfoText>
                               Pacjent: {currentVisit.patient.lastName}   {currentVisit.patient.firstName}<br/>
                               Pesel:{currentVisit.patient.pesel}<br/>
                               Data urodzenia:{currentVisit.patient.birthDate}
                           </PatientInfoText>
                       </PatientInformation>
                       <Jaw>
                           <UpperJawLeftFirst src={UpLFirst} isSelected = {currentTooth?.number ===11}  isNoTooth={teeth[0]?.noTooth}  alt="11" onClick={(event) => handleChoseTooth(event,teeth[0])}/>
                           <UpperJawLeftSecond src={UpLSecond} isSelected = {currentTooth?.number ===12}  isNoTooth={teeth[1]?.noTooth}   alt="12" onClick={(event)=>handleChoseTooth(event,teeth[1])}/>
                           <UpperJawLeftThird src={UpLThird} isSelected = {currentTooth?.number ===13}  isNoTooth={teeth[2]?.noTooth}  alt="13" onClick={(event) => handleChoseTooth(event,teeth[2])}/>
                           <UpperJawLeftFour src={UpLFour} isSelected = {currentTooth?.number ===14}  isNoTooth={teeth[3]?.noTooth}  alt="14" onClick={(event) => handleChoseTooth(event,teeth[3])}/>
                           <UpperJawLeftFive src={UpLFive} isSelected = {currentTooth?.number ===15}  isNoTooth={teeth[4]?.noTooth}  alt="15" onClick={(event) => handleChoseTooth(event,teeth[4])}/>
                           <UpperJawLeftSix src={UpLSix} isSelected = {currentTooth?.number ===16}  isNoTooth={teeth[5]?.noTooth}  alt="16" onClick={(event) => handleChoseTooth(event,teeth[5])}/>
                           <UpperJawLeftSeven src={UpLSeven} isSelected = {currentTooth?.number ===17}  isNoTooth={teeth[6]?.noTooth}  alt="17" onClick={(event) => handleChoseTooth(event,teeth[6])}/>
                           <UpperJawLeftEight src={UpLEight} isSelected = {currentTooth?.number ===18}  isNoTooth={teeth[7]?.noTooth}  alt="18" onClick={(event) => handleChoseTooth(event,teeth[7])}/>
                           <UpperJawRightFirst src={UpRFirst} isSelected = {currentTooth?.number ===21}  isNoTooth={teeth[8]?.noTooth}  alt="21" onClick={(event) => handleChoseTooth(event,teeth[8])}/>
                           <UpperJawRightSecond src={UpRSecond} isSelected = {currentTooth?.number ===22}  isNoTooth={teeth[9]?.noTooth}  alt="22" onClick={(event) => handleChoseTooth(event,teeth[9])}/>
                           <UpperJawRightThird src={UpRThird} isSelected = {currentTooth?.number ===23}  isNoTooth={teeth[10]?.noTooth}  alt="23" onClick={(event) => handleChoseTooth(event,teeth[10])}/>
                           <UpperJawRightFour src={UpRFour} isSelected = {currentTooth?.number ===24}  isNoTooth={teeth[11]?.noTooth}  alt="24" onClick={(event) => handleChoseTooth(event,teeth[11])}/>
                           <UpperJawRightFive src={UpRFive} isSelected = {currentTooth?.number ===25}  isNoTooth={teeth[12]?.noTooth}  alt="25" onClick={(event) => handleChoseTooth(event,teeth[12])}/>
                           <UpperJawRightSix src={UpRSix} isSelected = {currentTooth?.number ===26}  isNoTooth={teeth[13]?.noTooth}  alt="26" onClick={(event) => handleChoseTooth(event,teeth[13])}/>
                           <UpperJawRightSeven src={UpRSeven} isSelected = {currentTooth?.number ===27}  isNoTooth={teeth[14]?.noTooth}  alt="27" onClick={(event) => handleChoseTooth(event,teeth[14])}/>
                           <UpperJawRightEight src={UpREight} isSelected = {currentTooth?.number ===28}  isNoTooth={teeth[15]?.noTooth}  alt="28" onClick={(event) => handleChoseTooth(event,teeth[15])}/>
                           <DownJawLeftFirst src={DownLFirst} isSelected = {currentTooth?.number ===41}  isNoTooth={teeth[16]?.noTooth}  alt="41" onClick={(event) => handleChoseTooth(event,teeth[24])}/>
                           <DownJawLeftSecond src={DownLSecond} isSelected = {currentTooth?.number ===42}  isNoTooth={teeth[17]?.noTooth}  alt="42" onClick={(event) => handleChoseTooth(event,teeth[25])}/>
                           <DownJawLeftThird src={DownLThird} isSelected = {currentTooth?.number ===43}  isNoTooth={teeth[18]?.noTooth}  alt="43" onClick={(event) => handleChoseTooth(event,teeth[26])}/>
                           <DownJawLeftFour src={DownLFour} isSelected = {currentTooth?.number ===44}  isNoTooth={teeth[19]?.noTooth}  alt="44" onClick={(event) => handleChoseTooth(event,teeth[27])}/>
                           <DownJawLeftFive src={DownLFive} isSelected = {currentTooth?.number ===45}  isNoTooth={teeth[20]?.noTooth}  alt="45" onClick={(event) => handleChoseTooth(event,teeth[28])}/>
                           <DownJawLeftSix src={DownLSix} isSelected = {currentTooth?.number ===46}  isNoTooth={teeth[21]?.noTooth}  alt="46" onClick={(event) => handleChoseTooth(event,teeth[29])}/>
                           <DownJawLeftSeven src={DownLSeven} isSelected = {currentTooth?.number ===47}  isNoTooth={teeth[22]?.noTooth}  alt="47" onClick={(event) => handleChoseTooth(event,teeth[30])}/>
                           <DownJawLeftEight src={DownLEight} isSelected = {currentTooth?.number ===48}  isNoTooth={teeth[23]?.noTooth}  alt="48" onClick={(event) => handleChoseTooth(event,teeth[31])}/>
                           <DownJawRightFirst src={DownRFirst} isSelected = {currentTooth?.number ===31}  isNoTooth={teeth[24]?.noTooth}  alt="31" onClick={(event) => handleChoseTooth(event,teeth[16])}/>
                           <DownJawRightSecond src={DownRSecond} isSelected = {currentTooth?.number ===32}  isNoTooth={teeth[25]?.noTooth}  alt="32" onClick={(event) => handleChoseTooth(event,teeth[17])}/>
                           <DownJawRightThird src={DownRThird} isSelected = {currentTooth?.number ===33}  isNoTooth={teeth[26]?.noTooth}  alt="33" onClick={(event) => handleChoseTooth(event,teeth[18])}/>
                           <DownJawRightFour src={DownRFour} isSelected = {currentTooth?.number ===34}  isNoTooth={teeth[27]?.noTooth}  alt="34" onClick={(event) => handleChoseTooth(event,teeth[19])}/>
                           <DownJawRightFive src={DownRFive} isSelected = {currentTooth?.number ===35}  isNoTooth={teeth[28]?.noTooth}  alt="35" onClick={(event) => handleChoseTooth(event,teeth[20])}/>
                           <DownJawRightSix src={DownRSix} isSelected = {currentTooth?.number ===36}  isNoTooth={teeth[29]?.noTooth}  alt="36" onClick={(event) => handleChoseTooth(event,teeth[21])}/>
                           <DownJawRightSeven src={DownRSeven} isSelected = {currentTooth?.number ===37}  isNoTooth={teeth[30]?.noTooth}  alt="37" onClick={(event) => handleChoseTooth(event,teeth[22])}/>
                           <DownJawRightEight src={DownREight} isSelected = {currentTooth?.number ===38}  isNoTooth={teeth[31]?.noTooth}  alt="38" onClick={(event) => handleChoseTooth(event,teeth[23])}/>
                       </Jaw>
                   </Box>

                   <VisitOptions>
                       <Descriptions>
                           <DescriptionRow>
                               <DescriptionTitle>Notatka Lekarska</DescriptionTitle>
                               <Description value={currentVisit.doctorDescription}  onChange={saveVisitDescription}/>
                           </DescriptionRow>
                           <DescriptionRow>
                               <DescriptionTitle>Notatka z Recepcji</DescriptionTitle>
                               <Description value={currentVisit.receptionistDescription} disabled/>
                           </DescriptionRow>
                       </Descriptions>
                       {currentTooth && (
                           <TeethOptions>
                           <ToothDescription>
                                   <ToothNumberText>Ząb : {toothName}</ToothNumberText>
                                   <ToothDescriptionTextField value={descriptionTooth} onChange={changeToothDescription} placeholder="Wprowadź wpis do dokumentacji" />
                                   <ToothDescriptionSaveButton onClick={saveToothDescription} disabled={descriptionTooth.length <= 5}>Dodaj wpis do dokumentacji</ToothDescriptionSaveButton>
                                   <ToothDescriptionHistory>
                                       <ToothText>Dokumentacja</ToothText>
                                       <VirtualizedList descriptions={currentTooth.descriptions.sort((a, b) => b.id - a.id)}/>
                                   </ToothDescriptionHistory>
                       </ToothDescription>
                           <ToothStatus>
                               <ToothText>Status Zęba</ToothText>
                           <StatusLabel><StatusCheckbox type="checkbox" checked={forObservation} onChange={changeForObservationStatus}/> Do obserwacji</StatusLabel>
                           <StatusLabel><StatusCheckbox type="checkbox" checked={caries} onChange={changeCariesStatus}/> Próchnica</StatusLabel>
                           <StatusLabel><StatusCheckbox type="checkbox" checked={secondaryCaries} onChange={changeSecondaryCariesStatus}/> Próchnica wtórna</StatusLabel>
                           <StatusLabel><StatusCheckbox type="checkbox" checked={filling} onChange={changeFillingStatus}/> Wypełnienie</StatusLabel>
                           <StatusLabel><StatusCheckbox type="checkbox" checked={prostheticCrown} onChange={changeProstheticCrownStatus}/> Korona protetyczna </StatusLabel>
                           <StatusLabel><StatusCheckbox type="checkbox" checked={channelsFilledCorrectly} onChange={changeChannelsFilledCorrectlyStatus}/> Kanały wypełnione prawidłowo </StatusLabel>
                           <StatusLabel><StatusCheckbox type="checkbox" checked={channelNotCompleted} onChange={changeChannelNotCompletedStatus}/> Kanał niedopelniony</StatusLabel>
                           <StatusLabel><StatusCheckbox type="checkbox" checked={periapicalChange} onChange={changePeriapicalChangeStatus}/> Zmiana okolowierzcholko</StatusLabel>
                           <StatusLabel><StatusCheckbox type="checkbox" checked={crownRootInsert} onChange={changeCrownRootInsertStatus}/> Wkład koronowo-korzeniowy </StatusLabel>
                           <StatusLabel><StatusCheckbox type="checkbox" checked={supragingivalCalculus} onChange={changeSupragingivalCalculusStatus}/> Kamień naddziąslowy</StatusLabel>
                           <StatusLabel><StatusCheckbox type="checkbox" checked={subgingivalCalculus} onChange={changeSubgingivalCalculusStatus}/> Kamień poddziąslowy</StatusLabel>
                           <StatusLabel><StatusCheckbox type="checkbox" checked={impactedTooth} onChange={changeImpactedToothStatus}/> Ząb zatrzymany</StatusLabel>
                           <StatusLabel><StatusCheckbox type="checkbox" checked={noTooth} onChange={changeNoToothStatus}/> Brak zęba</StatusLabel>
                           <StatusLabel><StatusCheckbox type="checkbox" checked={microdonticTooth} onChange={changeMicrodonticToothStatus}/> Ząb mikrodontyczny </StatusLabel>
                           <StatusLabel><StatusCheckbox type="checkbox" checked={developmentalDefect} onChange={changeDevelopmentalDefectStatus}/> Wada rozwojowa</StatusLabel>
                           <StatusLabel><StatusCheckbox type="checkbox" checked={pathologicalClash} onChange={changePathologicalClashStatus}/> Starcie patologiczne</StatusLabel>
                           </ToothStatus>
                           </TeethOptions>
                           )}

                   </VisitOptions>
               </>
           )}

       </VisitBody>
    )
}