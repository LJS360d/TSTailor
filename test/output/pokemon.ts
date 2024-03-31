/* 31/3/2024, 12:52:14
  This file was generated with tstailor v0.0.1
  Interface report for pkmn:
  Majority keys: species, baseHP, baseAttack, baseDefense,
baseSpeed, baseSpAttack, baseSpDefense, types, catchRate,
expYield, genderRatio, eggCycles, friendship, growthRate,
eggGroups, abilities, bodyColor, speciesName, cryId,
natDexNum, categoryName, height, weight, description,
pokemonScale, pokemonOffset, trainerScale, trainerOffset,
frontPicYOffset, frontAnimFrames, frontAnimId,
backPicYOffset, backAnimId
  Objects (indexes) deviating from the majority: 2, 3, 4, 7,
8, 9, 10, 13, 14, 15, 18, 19, 22, 23, 26, 27, 28, 29, 30,
31, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 69, 70, 71, 72, 87,
88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 102, 103, 104, 105,
106, 113, 114, 117, 118, 124, 125, 126, 127, 128, 129, 130,
131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 144, 145,
146, 151, 152, 153, 154, 159, 160, 161, 163, 164, 168, 169,
170, 171, 172, 173, 175, 176, 178, 179, 187, 188, 197, 198,
207, 208, 209, 211, 212, 213, 222, 223, 224, 225, 226, 227,
229, 230, 231, 232, 234, 235, 251, 252, 254, 255, 256, 257,
258, 259, 260, 261, 265, 266, 267, 274, 275, 296, 297, 312,
314, 315, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329,
330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341,
342, 343, 344, 345, 346, 347, 351, 355, 356, 361, 362, 363,
365, 366, 367, 369, 370, 373, 374, 380, 381, 382, 390, 391,
395, 403, 404, 410, 411, 414, 415, 418, 419, 422, 423, 424,
425, 426, 444, 445, 446, 447, 467, 468, 469, 470, 473, 474,
476, 477, 479, 480, 491, 492, 496, 497, 508, 509, 526, 527,
528, 529, 532, 533, 540, 541, 543, 544, 556, 557, 560, 561,
565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 576, 577,
578, 579, 603, 604, 605, 606, 607, 608, 616, 617, 618, 619,
620, 621, 625, 626, 637, 638, 640, 641, 652, 653, 654, 655,
656, 657, 658, 659, 663, 664, 665, 666, 669, 670, 675, 676,
686, 687, 715, 716, 734, 735, 736, 737, 738, 739, 740, 744,
745, 746, 747, 748, 749, 756, 758, 759, 765, 766, 767, 768,
769, 770, 784, 785, 786, 787, 788, 789, 790, 791, 823, 824,
832, 835, 836, 849, 850, 851, 852, 855, 856, 857, 858, 859,
860, 861, 862, 863, 872, 873, 874, 882, 883, 884, 885, 886,
887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898,
899, 900, 901, 904, 905, 906, 907, 908, 909, 910, 911, 912,
913, 914, 915, 916, 917, 918, 919, 924, 925, 926, 927, 928,
929, 930, 931, 932, 933, 935, 936, 939, 940, 963, 964, 965,
966, 970, 971, 972, 973, 974, 975, 976, 977, 979, 980, 984,
985, 986, 987, 988, 992, 993, 996, 999, 1010, 1011, 1012,
1013, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1036, 1044,
1047, 1049, 1052, 1053, 1075, 1076, 1077, 1078, 1079, 1080,
1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097,
1099, 1100, 1101, 1103, 1106, 1107, 1110, 1111, 1112, 1113,
1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1124,
1125, 1126, 1128, 1129, 1130, 1131, 1132, 1134, 1135, 1136,
1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146,
1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157,
1158, 1159, 1160, 1161, 1162, 1163, 1165, 1166, 1167, 1169,
1170, 1171, 1172, 1173, 1174, 1175, 1176, 1178, 1179, 1180,
1181, 1182, 1183, 1184, 1185, 1189, 1190, 1191, 1192, 1193,
1194, 1195, 1197, 1198, 1199, 1200, 1201, 1202, 1205, 1206,
1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216,
1217, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226,
1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235, 1236,
1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246,
1247, 1248, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257,
1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267,
1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277,
1278, 1279, 1280, 1282, 1283, 1284, 1285, 1286, 1287, 1288,
1289, 1290, 1291, 1292, 1293, 1294, 1295, 1297, 1298, 1299,
1300, 1301, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311,
1313, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323 */
interface pkmn {
  species: string;
  baseHP?: string;
  baseAttack?: string;
  baseDefense?: string;
  baseSpeed?: string;
  baseSpAttack?: string;
  baseSpDefense?: string;
  types?: string;
  catchRate?: string;
  expYield?: string;
  evYield_SpAttack?: string;
  genderRatio?: string;
  eggCycles?: string;
  friendship?: string;
  growthRate?: string;
  eggGroups?: string;
  abilities?: string;
  bodyColor?: string;
  speciesName?: string;
  cryId?: string;
  natDexNum?: string;
  categoryName?: string;
  height?: string;
  weight?: string;
  description?: string;
  pokemonScale?: string;
  pokemonOffset?: string;
  trainerScale?: string;
  trainerOffset?: string;
  frontPicYOffset?: string;
  frontAnimFrames?: string;
  frontAnimId?: string;
  backPicYOffset?: string;
  backAnimId?: string;
  evolutions?: string;
  evYield_SpDefense?: string;
  isMegaEvolution?: string;
  isGigantamax?: string;
  evYield_Speed?: string;
  evYield_Defense?: string;
  frontAnimDelay?: string;
  evYield_HP?: string;
  tmIlliterate?: string;
  enemyMonElevation?: string;
  itemRare?: string;
  isAlolanForm?: string;
  evYield_Attack?: string;
  noFlip?: string;
  formChangeTable?: string;
  itemCommon?: string;
  isGalarianForm?: string;
  isHisuianForm?: string;
  isMythical?: string;
  isPaldeanForm?: string;
  isLegendary?: string;
  isPrimalReversion?: string;
  backPic?: string;
  backPicSize?: string;
  levelUpLearnset?: string;
  teachableLearnset?: string;
  cannotBeTraded?: string;
  isUltraBeast?: string;
  isUltraBurst?: string;
  formSpeciesIdTable?: string;
  isParadoxForm?: string;
}

