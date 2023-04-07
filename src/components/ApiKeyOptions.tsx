"use client";

import { FC, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/DropdownMenu";
import { Button } from "@/ui/Button";
import { Loader2 } from "lucide-react";
import { toast } from "@/ui/Toast";
import { createApiKey } from "@/helpers/create-api-key";
import { useRouter } from "next/navigation";
import { revokeApiKey } from "@/helpers/revoke-api-key";

interface ApiKeyOptionsProps {
  apiKeyId: string;
  apiKeyKey: string;
}

const ApiKeyOptions: FC<ApiKeyOptionsProps> = ({ apiKeyId, apiKeyKey }) => {
  const router = useRouter();
  const [isCreatingNew, setIsCreatingNew] = useState<boolean>(false);
  const [isRevoking, setIsRevoking] = useState<boolean>(false);

  const createNewKey = async () => {
    setIsCreatingNew(true);

    try {
      await revokeApiKey({ keyId: apiKeyId });
      await createApiKey();
      router.refresh();
    } catch (error) {
      toast({
        title: "Error",
        message: "An error occurred while creating a new API key",
        type: "error",
      });
    } finally {
      setIsCreatingNew(false);
    }
  };

  const revokeCurrentApiKey = async () => {
    setIsRevoking(true);

    try {
      await revokeApiKey({ keyId: apiKeyId });
      router.refresh();
    } catch (error) {
      toast({
        title: "Error",
        message: "An error occurred while revoking the API key",
        type: "error",
      });
    } finally {
      setIsRevoking(false);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger disabled={isCreatingNew || isRevoking} asChild>
        <Button variant="ghost" className="flex gap-2 item-center">
          <p>
            {isCreatingNew
              ? "Creating new key..."
              : isRevoking
              ? "Revoking key..."
              : "Options"}
          </p>
          {isCreatingNew || isRevoking ? (
            <Loader2 className="animate-spin h-4 w-4" />
          ) : null}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => {
            navigator.clipboard.writeText(apiKeyKey);

            toast({
              title: "Copied",
              message: "API key copied to clipboard",
              type: "success",
            });
          }}
        >
          Copy
        </DropdownMenuItem>

        <DropdownMenuItem onClick={createNewKey}>
          Create new key
        </DropdownMenuItem>

        <DropdownMenuItem onClick={revokeCurrentApiKey}>
          Revoke key
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ApiKeyOptions;
