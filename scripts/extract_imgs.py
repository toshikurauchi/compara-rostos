import cv2
import imageio


original = cv2.imread('./original.jpg')

# Crop the image
c_w = 277
c_h = 336
top = 1075
dx = c_w + 16
dy = 430

faces = []
for i in range(2):
    for j in range(12):
        cropped = original[top+i*dy:top+i*dy+c_h, j*dx:j*dx+c_w]
        faces.append(cropped)

with imageio.get_writer("../public/aging.gif", mode="I", loop=0) as writer:
    for idx, frame in enumerate(faces):
        rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        writer.append_data(rgb_frame)

ids = ['M', 'V', 'D', 'W', 'T', 'K', 'F', 'P', 'N', 'L', 'S', 'O', 'C', 'G', 'J', 'B', 'H', 'E', 'I', 'U', 'A', 'X', 'R', 'Q']
for i, face in enumerate(faces):
    face_with_id = cv2.putText(face, ids[i], (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2, cv2.LINE_AA)
    cv2.imwrite(f'../public/faces/{i}.png', face_with_id)
