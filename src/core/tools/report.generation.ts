export function determineMajorityInterface(
  keyPresenceCount: { [key: string]: number },
  totalObjects: number
) {
  const majorityPresenceThreshold = Math.floor(totalObjects / 2) + 1;
  const majorityKeys = Object.entries(keyPresenceCount)
    .filter(([_, count]) => count >= majorityPresenceThreshold)
    .map(([key, _]) => key);

  return majorityKeys;
}

export function identifyDeviantObjects(
  objectKeyPresence: boolean[][],
  majorityKeys: string[],
  keyPresenceCount: { [key: string]: number }
) {
  const keyIndexMap = Object.keys(keyPresenceCount).reduce((acc, key, index) => {
    acc.set(key, index);
    return acc;
  }, new Map<string, number>());

  return objectKeyPresence
    .map((presenceArray, index) => {
      const hasAllMajorityKeys = majorityKeys.every((key) => {
        const index = keyIndexMap.get(key);
        if (index === undefined) {
          return false;
        }
        return !!presenceArray.at(index);
      });
      return hasAllMajorityKeys ? null : index;
    })
    .filter((index) => index !== null);
}

function analyzeObjects(objects: object[]) {
  const keyPresenceCount: { [key: string]: number } = {};
  const objectKeyPresence: boolean[][] = [];

  objects.forEach((object, index) => {
    Object.keys(object).forEach((key) => {
      keyPresenceCount[key] = (keyPresenceCount[key] || 0) + 1;
      if (objectKeyPresence[index] === undefined) {
        objectKeyPresence[index] = [];
      }
      objectKeyPresence[index].push(true);
    });
  });

  return { keyPresenceCount, objectKeyPresence };
}

export function evaluateGeneration(
  objects: object[],
  interfaceName: string,
  doGenerateReport: boolean
): string {
  const { keyPresenceCount, objectKeyPresence } = analyzeObjects(objects);
  const majorityKeys = determineMajorityInterface(keyPresenceCount, objects.length);
  const deviantObjects = identifyDeviantObjects(objectKeyPresence, majorityKeys, keyPresenceCount);

  const reportLines = [
    `Interface report for ${interfaceName}:`,
    `Majority keys: ${majorityKeys.join(', ')}`,
    deviantObjects.length > 0
      ? `Objects (indexes) deviating from the majority: ${deviantObjects.join(', ')}`
      : 'All objects conform to the majority interface.',
  ];

  const report = reportLines.join('\n');

  console.log(report);
  if (doGenerateReport) {
    return report;
  }
  return '';
}
