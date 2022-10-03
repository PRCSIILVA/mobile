import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../../Components/Background';
import {useNavigation, useRoute} from '@react-navigation/native';
import { styles } from './style';
import { GameParams } from '../../@types/navigation';
import {Entypo} from '@expo/vector-icons';
import {TouchableOpacity, View,FlatList, Image, Text} from 'react-native';
import  {useEffect, useState} from 'react';
import { THEME } from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../../Components/Heading';
import { DuoCard, DuoCardProps } from '../../../Components/DuoCard';

export function Game() {
    const [duos,setDous] = useState<DuoCardProps[]>([]);
    const navigation = useNavigation();
    const route = useRoute();
    const game = route.params as GameParams;

    function hadleGoBack(){
      navigation.goBack();
    }
    useEffect(()=>{
      fetch(`http://192.168.100.163:3333/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data=>setDous(data))
    },[]);

  return (
    <Background>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={hadleGoBack}>
              <Entypo
              name='chevron-thin-left'
              color={THEME.COLORS.CAPTION_300}
              size={20}
              />
            </TouchableOpacity>
            <Image
            source={logoImg}
            style={styles.logo}
            />
            <View style={styles.right} />
          </View>

          <Image
          source={{uri:game.bannerUrl}}
          style={styles.cover}
          resizeMode="cover"/>

          <Heading
          title={game.title}
          subtitle="Conecte-se e comece a jogar!"/>
          <FlatList
          data={duos}
          keyExtractor={item=> item.id}
          renderItem={({ item }) =>(
            <DuoCard data={item}
            onConnect={()=> {}}/>
          )}
          horizontal
          style={styles.containerList}
          contentContainerStyle={[ duos.length > 0 ? styles.contentList : styles.ListContent]}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={()=>(
            <Text style={styles.emptyText}>
                Não há Anúncios Publicados ainda
            </Text>
          )}
  
          />
        </SafeAreaView>
    </Background>
  );
}