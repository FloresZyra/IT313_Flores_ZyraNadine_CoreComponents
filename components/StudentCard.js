import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

export default function StudentCard({
  id,
  name,
  year,
  photoUrl,
  flagged,
  onToggleFlag,
}) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.leftRow}>
        <Image source={{ uri: photoUrl }} style={styles.avatar}  />
        <View style={styles.infoCol}>
          <Text style={styles.studentName}>{name}</Text>
          <Text style={styles.studentYear}>{year}</Text>
        </View>
      </View>

      <Pressable
        onPress={() => onToggleFlag(id)}
        style={({ pressed }) => [
          styles.flagButton,
          flagged ? styles.flaggedButton : styles.unflaggedButton,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={[styles.flagText, flagged ? styles.flaggedText : styles.unflaggedText]}>
          {flagged ? '★ Flagged' : '☆ Flag'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#ffffff',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 18,
    marginBottom: 12,
    flexDirection: 'row',      
    alignItems: 'center',        
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#fce7f3',
    shadowColor: '#ec4899',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  leftRow: {
    flexDirection: 'row',        
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,           
    backgroundColor: '#fbcfe8',
  },
  infoCol: {
    marginLeft: 14,
    justifyContent: 'center',
  },
  studentName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#831843',
  },
  studentYear: {
    fontSize: 13,
    color: '#9d174d',
    marginTop: 2,
    opacity: 0.8,
  },
  flagButton: {
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1.5,
    minWidth: 86,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unflaggedButton: {
    backgroundColor: '#ffffff',
    borderColor: '#f472b6',
  },
  flaggedButton: {
    backgroundColor: '#ec4899',
    borderColor: '#db2777',
  },
  unflaggedText: {
    color: '#db2777',
    fontSize: 12,
    fontWeight: '700',
  },
  flaggedText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  buttonPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.96 }],
  },
});