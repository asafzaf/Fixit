import React, { useContext} from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../store/auth-context";
import IconButton from "../components/buttons/IconButton";

import MaintenaceHomeScreen from "../screens/maintenace/MaintenaceHomeScreen";

const Stack = createNativeStackNavigator();

export default function MaintenaceStack() {
    const authCtx = useContext(AuthContext);
    return (
        <Stack.Navigator>
        <Stack.Screen
            name="Maintenance Home"
            component={MaintenaceHomeScreen}
            options={{
            title: "",
            headerRight: () => (
                <IconButton
                icon="exit"
                color="#0D24F1"
                size={24}
                onPress={authCtx.logout}
                />
            ),
            }}
        />
        </Stack.Navigator>
    );
    }