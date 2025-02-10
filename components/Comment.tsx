import React, { useState } from "react";
import { YStack, Paragraph, XStack, Image, Text, View } from "tamagui";
import { ThumbsUp, ThumbsDown } from "@tamagui/lucide-icons";
import Reply from "./Reply";

interface CommentProps {
  user: string;
  comment: string;
  userAvatar: string;
  hours: number;
  replies: any[];
  likes: number;
  dislikes: number;
}

const Comment: React.FC<CommentProps> = ({
  user,
  comment,
  userAvatar,
  hours,
  replies,
  likes,
  dislikes,
}) => {
  const [showReplies, setShowReplies] = useState(false);

  return (
    <YStack>
      <View
        padding="$4"
        paddingBottom="0"
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="space-between"
        style={{ width: "100%" }}
      >
        <Image
          width={35}
          height={35}
          borderRadius="$radius.9"
          marginRight="$4"
          source={{ uri: userAvatar }}
        />

        <YStack flex={1}>
          <XStack gap="$2" alignItems="center">
            <Text>{user}</Text>
            <Text color="$color10">{hours}h</Text>
          </XStack>

          <Paragraph fontSize="$3" lineHeight="$3" marginTop="$2">
            {comment}
          </Paragraph>

          <View flexDirection="row" gap="$4" alignItems="center" marginTop="$2">
            <View alignItems="center" flexDirection="row" gap="$2">
              <ThumbsUp size={15} color="$color11" />
              <Text color="$color11">{likes.toString()}</Text>
            </View>

            <View alignItems="center" flexDirection="row" gap="$2">
              <ThumbsDown size={15} color="$color11" />
              <Text color="$color11">{dislikes.toString()}</Text>
            </View>
            <Text color="$color11">Responder</Text>
          </View>

          {replies.length ? (
            <Text
              marginTop="$4"
              color="$gray10Light"
              textAlign="center"
              onPress={() => setShowReplies(!showReplies)}
            >
              {showReplies
                ? `Ocultar respuestas (${replies.length})`
                : `Ver respuestas (${replies.length})`}
            </Text>
          ) : null}
        </YStack>
      </View>
      {showReplies && (
        <YStack marginLeft="$8">
          {replies.map((reply, index) => (
            <Reply key={index} {...reply} />
          ))}
        </YStack>
      )}
    </YStack>
  );
};

export default Comment;
