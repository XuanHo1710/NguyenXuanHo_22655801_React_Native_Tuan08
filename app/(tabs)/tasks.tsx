import { StyleSheet, TextInput, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function TasksScreen() {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'To check email', completed: false },
    { id: '2', title: 'UI task web page', completed: false },
    { id: '3', title: 'Learn javascript basic', completed: false },
    { id: '4', title: 'Learn HTML Advance', completed: false },
    { id: '5', title: 'Medical App UI', completed: false },
    { id: '6', title: 'Learn Java', completed: false },
  ]);
  const [search, setSearch] = useState('');
  const [editId, setEditId] = useState<string | null>(null);
  const [editText, setEditText] = useState('');

  const filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(search.toLowerCase()));

  const handleCheck = (id: string) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const handleDelete = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleEdit = (id: string, title: string) => {
    setEditId(id);
    setEditText(title);
  };

  const handleEditSave = (id: string) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, title: editText } : task));
    setEditId(null);
    setEditText('');
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.headerRow}>
        <Image source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }} style={styles.avatar} />
        <View style={styles.titleContainer}>
          <ThemedText style={styles.greeting}>Hi Twinkle</ThemedText>
          <ThemedText style={styles.subtitle}>Have a great day a head</ThemedText>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#999" style={{ marginRight: 8 }} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#999"
          value={search}
          onChangeText={setSearch}
        />
      </View>
      <ScrollView style={styles.taskList}>
        {filteredTasks.map(task => (
          <View key={task.id} style={styles.taskItem}>
            <TouchableOpacity style={styles.checkBox} onPress={() => handleCheck(task.id)}>
              {task.completed ? (
                <Ionicons name="checkmark" size={20} color="#00BCD4" />
              ) : (
                <View style={styles.uncheckedBox} />
              )}
            </TouchableOpacity>
            {editId === task.id ? (
              <TextInput
                style={styles.editInput}
                value={editText}
                onChangeText={setEditText}
                onBlur={() => handleEditSave(task.id)}
                autoFocus
              />
            ) : (
              <ThemedText style={[styles.taskTitle, task.completed && styles.completed]}>{task.title}</ThemedText>
            )}
            <View style={styles.actionRow}>
              <TouchableOpacity style={styles.deleteBtn} onPress={() => handleDelete(task.id)}>
                <Ionicons name="remove" size={20} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.editBtn} onPress={() => handleEdit(task.id, task.title)}>
                <Ionicons name="pencil" size={20} color="#00BCD4" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.addButtonContainer}>
        <TouchableOpacity style={styles.addButton} onPress={() => router.push('/add-task')}>
          <Ionicons name="add" size={36} color="#fff" />
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F9FB',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  titleContainer: {
    gap: 2,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#25292e',
  },
  subtitle: {
    fontSize: 14,
    color: '#999',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.07,
    shadowRadius: 2,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#25292e',
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  taskList: {
    flex: 1,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 14,
    paddingVertical: 12,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  checkBox: {
    width: 28,
    height: 28,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#00BCD4',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    backgroundColor: '#F8F9FB',
  },
  uncheckedBox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  taskTitle: {
    flex: 1,
    fontSize: 16,
    color: '#25292e',
    fontWeight: '500',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#bbb',
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginLeft: 8,
  },
  deleteBtn: {
    backgroundColor: '#FF5252',
    borderRadius: 8,
    padding: 6,
    marginRight: 4,
  },
  editBtn: {
    backgroundColor: '#E0F7FA',
    borderRadius: 8,
    padding: 6,
  },
  editInput: {
    flex: 1,
    fontSize: 16,
    backgroundColor: '#F8F9FB',
    borderRadius: 8,
    paddingHorizontal: 8,
    color: '#25292e',
  },
  addButtonContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#00BCD4',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
});
