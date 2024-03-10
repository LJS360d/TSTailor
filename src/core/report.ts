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
  const keyIndexMap = Object.keys(keyPresenceCount).reduce(
    (acc, key, index) => {
      acc[key] = index;
      return acc;
    },
    {}
  );

  return objectKeyPresence
    .map((presenceArray, index) => {
      const hasAllMajorityKeys = majorityKeys.every(
        (key) => presenceArray[keyIndexMap[key]]
      );
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
  report: string
) {
  const { keyPresenceCount, objectKeyPresence } = analyzeObjects(objects);
  const majorityKeys = determineMajorityInterface(
    keyPresenceCount,
    objects.length
  );
  const deviantObjects = identifyDeviantObjects(
    objectKeyPresence,
    majorityKeys,
    keyPresenceCount
  );

  console.log(`Majority interface report for ${interfaceName}:`);
  console.log(`Majority keys: ${majorityKeys.join(", ")}`);
  if (deviantObjects.length > 0) {
    console.log(
      `Objects deviating from the majority: ${deviantObjects.join(", ")}`
    );
  } else {
    console.log("All objects conform to the majority interface.");
  }
}
