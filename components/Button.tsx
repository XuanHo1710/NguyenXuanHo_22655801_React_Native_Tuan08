import { StyleSheet, View, Pressable, Text } from 'react-native';

type Props = {
  label: string;
  theme?: 'primary';
  onPress?: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
  if (theme === 'primary') {
    return (
      <View style={styles.buttonContainer}>
        <Pressable 
          style={[styles.button, { backgroundColor: '#00BCD4' }]} 
          onPress={onPress}
        >
          <Text style={[styles.buttonLabel, { color: '#fff' }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable 
        style={[styles.button, { backgroundColor: '#f5f5f5' }]} 
        onPress={onPress}
      >
        <Text style={[styles.buttonLabel, { color: '#666' }]}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 25,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
});
