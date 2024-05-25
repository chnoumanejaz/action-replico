'use client';
import AnimationTermsConds from '@/components/portal/AnimationTermsConds';
import AnimationWidget from '@/components/portal/AnimationWidget';
import PageWrapper from '@/components/portal/PageWrapper';
import ConfettiAnim from '@/components/ui/ConfettiAnim';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

type responseDataT = {
  code: number;
  csvFilePath: string;
  message: string;
  status: string;
};

const NEXT_STEPS = [
  {
    title: 'Open the Blender',
    support: '(any version)',
  },
  {
    title: 'Switch the workspace to Text Editor or press',
    support: '(Shift + F11)',
  },
  {
    title: 'Open the File or copy the code and paste it ',
    support: '(to Open press Ctrl + O)',
  },
  {
    title: 'Run the code or press',
    support: '(Alt + P)',
  },
  {
    title: 'Wait for the magic to happen',
    support: '(It will take some time)',
  },
  {
    title: 'Enjoy the animation 🎉',
  },
];

const codeSnippet = `import bpy
import csv

def read_csv(file_path):
    # Read CSV file using Python's built-in csv module
    with open(file_path, newline='') as csvfile:
        reader = csv.reader(csvfile)
        headers = next(reader)  # Skip the header row
        pose_data = [row for row in reader]
    return headers, pose_data

def get_bone_mapping(model):
    # Automatically get bone names from the armature
    bone_mapping = {i: bone.name for i, bone in enumerate(model.pose.bones) if i < 33}
    return bone_mapping

def animate_model(model_name, csv_file_path):
    # Read the pose data from CSV
    headers, pose_data = read_csv(csv_file_path)
    
    # Get the model
    model = bpy.data.objects.get(model_name)
    if model is None:
        print(f"Model '{model_name}' not found.")
        return
    
    # Ensure the model has an armature
    if model.type != 'ARMATURE':
        print(f"Model '{model_name}' is not an armature.")
        return
    
    # Get bone mapping automatically
    bone_mapping = get_bone_mapping(model)
    
    # Enter pose mode
    bpy.context.view_layer.objects.active = model
    bpy.ops.object.mode_set(mode='POSE')
    
    # Set the frame range
    frame_count = len(pose_data)
    bpy.context.scene.frame_start = 0
    bpy.context.scene.frame_end = frame_count - 1
    
    # Iterate over each frame
    for row in pose_data:
        frame_index = int(row[0])
        bpy.context.scene.frame_set(frame_index)
        
        for i in range(33):
            bone_name = bone_mapping.get(i)
            print(bone_name)
            if bone_name and bone_name in model.pose.bones:
                bone = model.pose.bones[bone_name]
                x = float(row[1 + 4*i])
                y = float(row[2 + 4*i])
                z = float(row[3 + 4*i])
                
                # Set bone location in pose mode
                bone.location = (x, y, z)
                
                # Insert keyframe in pose mode
                bone.keyframe_insert(data_path='location', frame=frame_index)
    
    print(f"Animation applied to model '{model_name}' from CSV file '{csv_file_path}'.")

# Example usage
model_name = "Armature"  # Replace with the name of your model
csv_file_path = "/home/nouman-ejaz/Desktop/standing_clap_landmarks.csv"  # Replace with the path to your CSV file

animate_model(model_name, csv_file_path)

`;

const ClassificationPage = () => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [responseData, setResponseData] = useState<responseDataT | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  function handleNew() {
    setIsAgreed(false);
    setResponseData(null);
  }

  return (
    <PageWrapper
      title="Make Animation "
      subheading="Select & Upload the video and get the animation done!">
      <div>
        {isAgreed && !responseData && (
          <AnimationWidget setResponseData={setResponseData} />
        )}
        {!isAgreed && !responseData && (
          <AnimationTermsConds setIsAgreed={setIsAgreed} />
        )}

        {responseData && (
          <div className="grid grid-cols-2 gap-4">
            <ConfettiAnim />

            <div className="bg-secondary/20 border p-6 rounded-lg">
              <h3 className="text-lg font-semibold">What&apos;s Next?</h3>
              <p className="text-muted-foreground text-sm">
                Follow the following steps to get the animation done:
              </p>
              {NEXT_STEPS.map((step, index) => (
                <div
                  className="mt-6 flex items-center gap-2"
                  key={index + step.title}>
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10">
                    {index + 1}
                  </div>
                  <p className="font-medium">
                    {step.title}
                    {step.support && (
                      <code className="font-normal text-xs p-1 rounded-md bg-secondary/50 block w-fit">
                        {step.support}
                      </code>
                    )}
                  </p>
                </div>
              ))}

              <Button className="mt-3 w-full" onClick={handleNew}>
                Create new animation
              </Button>
            </div>
            <div className="bg-secondary/20 border p-6 rounded-lg">
              <h3 className="text-lg font-semibold">Resources</h3>
              <p className="text-muted-foreground text-sm">
                Use these resources to get the animation done:
              </p>

              <div className="mt-3">
                <div className="flex justify-between items-center mb-3">
                  <p className="text-primary text-sm font-semibold">
                    Copy the code:
                  </p>
                  <Button
                    size="sm"
                    variant={!isCopied ? 'secondary' : 'default'}
                    onClick={handleCopy}>
                    {isCopied ? 'Copied!' : 'Copy code'}
                  </Button>
                </div>

                <pre className="bg-gray-900 h-[60vh] text-white p-4 rounded-md overflow-scroll">
                  <code>{codeSnippet}</code>
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export default ClassificationPage;
