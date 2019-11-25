import { createBottonTabNavigator, createAppContainter} from 'react-navigation'
import Ionicons from 'react-navigate-vector-icons/Ionicons'

import HomeScreen from '../../screens/HomeScreen/HomeScreen'
import VacancieScreen from '../../screens/VacancieScreen/VacancieScreen'

const tabNavigator = createBottonTabNavigator(
    {
        Home: HomeScreen,
        Profile: ProfileScreen
    },
    {
        tabBarOptions: {
            labelStyle:{
                fontSize: 35
            },
            activeTintColor: 'tomato',
            inactiveTintColor: 'white',
            style: {
                backgroundColor: 'blue'
            },
            showLabel:false
        },
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.this.state
                let IconComponent = Ionicons
                let iconName

                if(routeName === 'Home'){
                    iconName = 'md-home'
                }
                else if (routeName === 'Vagas'){
                    iconName = 'md-list'
                }
                return <IconComponent name={iconName} size={50} color={tintColor}/>
            }

        })
    }
)