


namespace Keepr.Services;

public class VaultsService
{
  private readonly VaultsRepository _repository;

  public VaultsService(VaultsRepository repository)
  {
    _repository = repository;
  }

  internal Vault CreateVault(Vault vaultData)
  {
    Vault vault = _repository.CreateVault(vaultData);
    return vault;
  }

  internal string DestroyVault(int vaultId, string userId)
  {
    Vault vault = GetVaultById(vaultId, userId);
    if (vault.CreatorId != userId)
    {
      throw new Exception("This is not your Vault to delete");
    }
    _repository.DestroyVault(vaultId);
    return $"{vault.Name} has been deleted!";
  }

  internal List<Vault> GetMyVaults(string userId)
  {
    List<Vault> vaults = _repository.GetMyVaults(userId);
    return vaults;
  }

  internal Vault GetVaultById(int vaultId, string userId)
  {
    Vault vault = _repository.GetVaultById(vaultId, userId);
    if (vault == null)
    {
      throw new Exception($"Invalid Id: {vaultId}");
    }
    if (vault.IsPrivate == true && vault.CreatorId != userId)
    {
      throw new Exception($"Invalid Id: {vaultId}");
    }
    return vault;
  }

  internal List<Vault> GetVaultsByProfileId(string profileId, string userId)
  {
    List<Vault> vaults = _repository.GetVaultsByProfileId(profileId, userId);
    return vaults;
  }

  internal Vault UpdateVault(int vaultId, string userId, Vault vaultData)
  {
    Vault vaultToUpdate = GetVaultById(vaultId, userId);
    if (vaultToUpdate.CreatorId != userId)
    {
      throw new Exception("This is not your vault to update");
    }

    vaultToUpdate.Name = vaultData.Name ?? vaultToUpdate.Name;
    vaultToUpdate.Description = vaultData.Description ?? vaultToUpdate.Description;
    vaultToUpdate.Img = vaultData.Img ?? vaultToUpdate.Img;
    vaultToUpdate.Img = vaultData.Img ?? vaultToUpdate.Img;
    vaultToUpdate.IsPrivate = vaultData.IsPrivate ?? vaultToUpdate.IsPrivate;

    Vault vault = _repository.UpdateVault(vaultToUpdate);
    return vault;
  }
}