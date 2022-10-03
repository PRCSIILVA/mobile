import { GameController } from "phosphor-react-native"
import { TouchableOpacity, View,Text } from 'react-native';
import { THEME } from '../../src/theme';
import { DuoInfo } from '../DuoInfo';
import { styles } from './styles';

export interface DuoCardProps{
  id: string;
  hourEnd:string;
  hourStart: string;
  name:string;
  useVoiceChannel: boolean;
  weekDays: string[];
  YearsPlaying:number;
}

interface Props{
  data: DuoCardProps;
  onConnect: ()=> void;
}

export function DuoCard({data, onConnect}:Props) {
  return (
    <View style={styles.container}>
      <DuoInfo
      label="Nome"
      value={data.name}
      />
      <DuoInfo
      label="Tempo de Jogo"
      value={`${data.YearsPlaying} Anos`}
      />
      <DuoInfo
      label="Disponibilidade"
      value={`${data.weekDays.length} Dias \u2022 ${data.hourStart}- ${data.hourEnd}`}
      />
      <DuoInfo
      label="Chamada de Aúdio"
      value={data.useVoiceChannel ? "Sim" : "Não"}
      colorValue={data.useVoiceChannel ?  THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />
      <TouchableOpacity 
      style={styles.button}
      onPress={onConnect}>
        <GameController
        color={THEME.COLORS.TEXT}
        size={20}
        />
        <Text style={styles.btitle}>
          Conectar
        </Text>
      </TouchableOpacity>
    </View>

    
  );
}