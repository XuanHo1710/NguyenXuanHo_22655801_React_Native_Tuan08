import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ThemedText } from './themed-text';
import { Ionicons } from '@expo/vector-icons';

type TaskItemProps = {
  title: string;
  completed: boolean;
};

export default function TaskItem({ title, completed: initialCompleted }: TaskItemProps) {
  const [completed, setCompleted] = useState(initialCompleted);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setCompleted(!completed)}
      activeOpacity={0.7}
    >
      <View style={styles.checkboxContainer}>
        <View style={[styles.checkbox, completed && styles.checkboxChecked]}>
          {completed && <Ionicons name="checkmark" size={16} color="white" />}
        </View>
      </View>
      <ThemedText style={[styles.title, completed && styles.titleCompleted]}>
        {title}
      </ThemedText>
      <TouchableOpacity style={styles.editButton}>
        <Ionicons name="pencil" size={18} color="#999" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginBottom: 10,
  },
  checkboxContainer: {
    marginRight: 15,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#00BCD4',
    borderColor: '#00BCD4',
  },
  title: {
    flex: 1,
    fontSize: 16,
  },
  titleCompleted: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  editButton: {
    padding: 5,
  },
});
