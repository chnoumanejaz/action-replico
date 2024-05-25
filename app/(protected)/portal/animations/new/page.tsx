'use client';
import AnimationTermsConds from '@/components/portal/AnimationTermsConds';
import AnimationWidget from '@/components/portal/AnimationWidget';
import PageWrapper from '@/components/portal/PageWrapper';
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

# Clear existing objects
bpy.ops.object.select_all(action='DESELECT')
bpy.ops.object.select_by_type(type='MESH')
bpy.ops.object.delete() # Create a cube
bpy.ops.mesh.primitive_cube_add(size=2, location=(0, 0, 0))

cube = bpy.context.object # Add rotation animation
cube.rotation_euler = (0, 0, 0) # Initial rotation
cube.keyframe_insert(data_path='rotation_euler', frame=1) #

Keyframe at frame 1 cube.rotation_euler = (0, 0, 2 * 3.14159)

# Final rotation (2π radians)
cube.keyframe_insert(data_path='rotation_euler', frame=50) #
Keyframe at frame 50 # Set animation properties
bpy.context.scene.frame_start = 1 bpy.context.scene.frame_end
= 50 bpy.context.scene.render.fps = 24 # Export animation as a
video bpy.context.scene.render.image_settings.file_format =

'FFMPEG' bpy.context.scene.render.filepath = '/path/to/output/video.mp4'
bpy.ops.render.render(animation=True)
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
