import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#00BCD4',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#eee',
        },
      }}
    >
      <Tabs.Screen
        name="tasks"
        options={{
          title: 'Tasks',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons 
              name={focused ? 'list' : 'list-outline'} 
              color={color} 
              size={24} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="add-task"
        options={{
          title: 'Add Task',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons 
              name={focused ? 'add-circle' : 'add-circle-outline'} 
              color={color} 
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons 
              name={focused ? 'person' : 'person-outline'} 
              color={color} 
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
