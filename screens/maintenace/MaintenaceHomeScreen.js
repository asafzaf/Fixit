import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AuthContext } from '../../store/auth-context';
import { styles } from '../../styles';


const MaintenaceHomeScreen = ({navigation}) => {
    const authCtx = useContext(AuthContext);
    return (
        <View style={styles.container}>
        <Text style={styles.small_title}>Maintenance Home Screen</Text>
        <Text style={styles.small_title}>Welcome {authCtx.name}</Text>
        <Button title="Logout" onPress={authCtx.logout} />
        </View>
    );
    }

export default MaintenaceHomeScreen;