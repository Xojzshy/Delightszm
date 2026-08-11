import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

replacements = {
    'passion_fruit_cooler_1786467924439.jpg': 'passion_fruit_cooler_new_1786475922725.jpg',
    'sunrise_mocktail_1786467938500.jpg': 'delights_surprise_mocktail_1786475936388.jpg',
    'sharing_memories_1786467992823.jpg': 'sharing_sweet_memories_1786475948879.jpg',
    'store_vibes_1786468022004.jpg': 'arcades_stores_vibes_1786475963035.jpg',
    'perfect_sunday_sundae_1786468231799.jpg': 'perfect_sunday_sundae_new_1.jpg'
}

for old, new in replacements.items():
    content = content.replace(old, new)

with open('src/App.tsx', 'w') as f:
    f.write(content)

print("Updated imports.")
